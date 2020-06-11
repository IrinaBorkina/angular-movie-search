import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TVListComponent } from './components/tv-list/tv-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailedComponent } from './components/movie-detailed/movie-detailed.component';

const routes: Routes = [
  {
  	path: '',
  	component: HomeComponent,
  },
  // {
  // 	path: 'home',
  // 	component: HomeComponent,
  // 	children: [
  // 		{
  // 		path: 'new-list',
  // 		component: MovieListComponent,
  // 		},
  // 		{
  // 		path: 'popular-list',
  // 		component: MovieListComponent,
  // 		},
  // 		{
  // 		path: 'recommended-list',
  // 		component: MovieListComponent,
  // 		},
  // 	],
  // },
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
  {
  	path: 'movie-detailed',
  	component: MovieDetailedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
