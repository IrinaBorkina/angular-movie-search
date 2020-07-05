import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './routes/movies/movie-details/movie-details.component';
import { TvShowDetailsComponent } from './routes/tv-shows/tv-show-details/tv-show-details.component';
import { ActorDetailsComponent } from './components/actor-details/actor-details.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home/new-list',
		pathMatch: 'full',
	},
	{
		path: 'home',
		redirectTo: 'home/new-list',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./routes/home/home.module').then(
				(m: typeof import('./routes/home/home.module')) => m.HomeModule
			),
	},
	{
		path: 'tv-shows',
		loadChildren: () =>
			import('./routes/tv-shows/tv-shows.module').then(
				(m: typeof import('./routes/tv-shows/tv-shows.module')) =>
					m.TvShowsModule
			),
	},
	{
		path: 'movies',
		loadChildren: () =>
			import('./routes/movies/movies.module').then(
				(m: typeof import('./routes/movies/movies.module')) =>
					m.MoviesModule
			),
	},
	{
		path: 'movie-details/:id',
		component: MovieDetailsComponent,
	},
	{
		path: 'tv-show-details/:id',
		component: TvShowDetailsComponent,
	},
	{
		path: 'actor-details/:id',
		component: ActorDetailsComponent,
	},
	{
		path: 'search',
		loadChildren: () =>
			import('./routes/search/search.module').then(
				(m: typeof import('./routes/search/search.module')) =>
					m.SearchModule
			),
	},
	{
		path: 'watch-list',
		loadChildren: () =>
			import('./routes/watchlist/watchlist.module').then(
				(m: typeof import('./routes/watchlist/watchlist.module')) =>
					m.WatchlistModule
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
