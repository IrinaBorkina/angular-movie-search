import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TVListComponent } from './components/tv-list/tv-list.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DetailsComponent } from './components/details/details.component';
import { SearchComponent } from './components/search/search.component';
import { TvShowDetailsComponent } from './components/tv-show-details/tv-show-details.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
	{
		path: 'tv-shows',
		component: TVListComponent,
	},
	{
		path: 'movies',
		component: MoviesComponent,
	},
	// {
	// 	path: 'details',
	// 	component: DetailsComponent,
	// },
	// {
	// 	path: 'tv-show-details',
	// 	component: TvShowDetailsComponent,
	// },
	{
		path: 'search',
		component: SearchComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
