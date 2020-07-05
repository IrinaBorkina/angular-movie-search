import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesGenresComponent } from './movies-genres/movies-genres.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
	declarations: [
		MoviesComponent,
		MoviesGenresComponent,
		MovieDetailsComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		MoviesRoutingModule,
		SharedModule,
	],
})
export class MoviesModule {}
