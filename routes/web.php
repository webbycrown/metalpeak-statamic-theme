<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use Statamic\Facades\Site;

Site::all()->each(function (Statamic\Sites\Site $site) {
	Route::prefix($site->url())->group(function () {
		Route::statamic('/blog/category/{category_slug}', 'category');
		Route::statamic('/service/category/{category_slug}', 'category');
	});
});

Route::get('/newsLetter', [BlogController::class, 'newsLetter'])->name('newsLetter');
Route::get('/blog-search', [BlogController::class, 'search'])->name('blog.search');
Route::get('/ajax-search-careers-insights', [BlogController::class, 'careersInsightsSearch'])->name('header.search');
