import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieListComponent } from '../movie-list/movie-list.component';

const routes: Routes = [
  {
  	path: 'movies',
  	component: MoviesComponent,
  	children: [
  		{
  		path: 'action',
  		component: MovieListComponent,
  		},
  		{
  		path: 'comedy',
  		component: MovieListComponent,
  		},
  		{
  		path: 'adventure',
  		component: MovieListComponent,
  },
  {
  path: 'horror',
  component: MovieListComponent,
  },
  {
  path: 'fantasy',
  component: MovieListComponent,
  },
  	],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
