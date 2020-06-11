import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
  	path: 'home',
  	component: HomeComponent,
  	children: [
  		{
  		path: 'new-list',
  		component: MovieListComponent,
  		},
  		{
  		path: 'popular-list',
  		component: MovieListComponent,
  		},
  		{
  		path: 'recommended-list',
  		component: MovieListComponent,
  		},
  	],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
