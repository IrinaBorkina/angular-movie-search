import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from '../movies/movie-details/movie-details.component';
import { SearchComponent } from './search.component';
import { TvShowDetailsComponent } from '../tv-shows/tv-show-details/tv-show-details.component';

const routes: Routes = [
	{
		path: '',
		component: SearchComponent,
	},
	{
		path: '',
		component: SearchComponent,
		children: [
			{
				path: 'movie-details/:id',
				component: MovieDetailsComponent,
			},
			{
				path: 'tv-show-details/:id',
				component: TvShowDetailsComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SearchRoutingModule {}
