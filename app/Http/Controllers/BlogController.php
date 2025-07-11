<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Statamic\Facades\Entry;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Statamic\Facades\Form;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{   

    public function search(Request $request){   
        // Get the search keyword from the request
        $query = $request->get('s');
        $tag = $request->get('tag');

        // Query blog entries from the 'blog' collection matching the title
        $entries = Entry::query()
        ->where('collection', 'blogs')
        ->when(!empty($tag), function ($q) use ($tag) {
                        $q->where('tag', 'like', "%$tag%"); // or ->whereJsonContains('tags', $tag)
                    })
        ->when($query, function ($q) use ($query) {
            $q->where(function ($subQuery) use ($query) {
                $subQuery->where('title', 'like', "%{$query}%")
                ->orWhere('slug', 'like', "%{$query}%");
            });
        })
            ->orderBy('updated_at', 'desc') // Sort results by last updated
            ->get()
            ->map(function ($entry) {
                $image = $entry->get('thumb_image'); // Get image field (can be array of asset IDs)

                $teamId = $entry->get('team_member');

                $team = $teamId ? Entry::query()
                ->where('collection', 'teams')
                ->where('id', $teamId)
                ->first() : null;

                return [
                    'title' => $entry->get('title'),
                    'short_description' => $entry->get('short_description'),
                    'slug' => $entry->slug(),
                    'url' => $entry->url(),
                    'read_more_button_text' => $entry->get('read_more_button_text'),    
                    'read_more_button_url' => $entry->get('read_more_button_url'),
                    // Convert asset paths to public URLs
                    'thumb_image' =>  collect($image)->map(function ($asset) {
                        return url('assets/'.$asset);
                    })->toArray(),
                    // Format the updated date

                    'updated_at' => Carbon::createFromTimestamp($entry->get('updated_at'))->format('M j, Y'),

                    // Team Member Data
                    'team_member' => $team ? [
                        'title' => $team->get('title'),
                        'image' => $team->get('image') ? url('assets/' . $team->get('image')) : null,
                        'bio' => $team->get('bio'),
                        'updated_at' => Carbon::createFromTimestamp($entry->get('updated_at'))->format('j F, Y'),
                    ] : null,
                ];
            });

        return response()->json($entries);  // Return as JSON response
    }


  
    /**
     * Handle newsletter subscription.
     * Validates email, checks for duplicates, and saves new submissions.
     */
    public function newsLetter( Request $request ){
        // Get email from request, default to empty string
        $email = $request->get('email') ? $request->get('email') : '';

        // Validate email format
        $validator = Validator::make(['email' => $email], [
            'email' => [
                'required',
                'email',
            ]
        ]);

        // If validation fails, return error response
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'email is required',
            ], 200);
        }

        // Load the 'newsletter' form
        $form = Form::find('newsletter');

        // Check if the email has already been submitted
        $existing = $form->submissions()->filter(function ($item) use ($email) {
            return $item->get('email') === $email;
        })->first();

        // If email already exists, return message    
        if ($existing) {
            return response()->json([
                'status'=> false , 
                'message' => "You are already subscribed"
            ], 200);
        }

        // Save new form submission
        $form->makeSubmission()->data([
            'email' => $email,
        ])->save();

        // Return success response
        return response()->json([
            'status' => true,
            'message' => 'Thank you for subscribing!',
        ]);

    }

     public function careersInsightsSearch(Request $request)
    {   
        // Get query parameters from the request
        $query = $request->get('s', '');
        // 'blog', 'service', or 'our_services'
        $type = $request->get('type');
        // Whether to return full JSON results or view
        $full = $request->boolean('full');

         // Search in 'blog' collection by title or slug, then remove duplicates by title
        $blog = Entry::query()
        ->where('collection', 'blogs')
        ->where(fn($q) => $q->where('title', 'like', "%$query%")
            ->orWhere('slug', 'like', "%$query%"))
        ->get()
        ->unique('title')
        ->values();

        // Search in 'service' collection by title or slug, then remove duplicates by title
        $services = Entry::query()
        ->where('collection', 'services')
        ->where(fn($q) => $q->where('title', 'like', "%$query%")
            ->orWhere('slug', 'like', "%$query%"))
        ->get()
        ->unique('title')
        ->values();

        // Search in 'testimonial' collection by title or slug, then remove duplicates by title
        $testimonial = Entry::query()
        ->where('collection', 'testimonial')
        ->where(fn($q) => $q->where('title', 'like', "%$query%")
            ->orWhere('slug', 'like', "%$query%"))
        ->get()
        ->unique('title')
        ->values();

        // If full flag is true, return JSON with results only for the specified type
        if ($full) {
            return response()->json([
                'blog' => $type === 'blog' ? $blog : [],
                'services' => $type === 'services' ? $services : [],
                'testimonial' => $type === 'testimonial' ? $testimonial : [],
            ]);
        }

        // Otherwise, return a partial view with all result types
        return view('partials.search-results', [
            'blog' => $blog,
            'services' => $services,
            'testimonial' => $testimonial,
            'query' => $query,
        ]);
    }
}
