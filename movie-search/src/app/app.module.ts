import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TVListComponent } from './components/tv-list/tv-list.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MainMovieComponent } from './components/main-movie/main-movie.component';
import { GenresComponent } from './components/genres/genres.component';
import { RecommendedListComponent } from './components/recommended-list/recommended-list.component';
import { MovieDetailedComponent } from './components/movie-detailed/movie-detailed.component';
import { MoviesRoutingModule } from './components/movies/movies-routing.module';
import { HomeRoutingModule } from './components/home/home-routing.module';

@NgModule({
  declarations: [
  	AppComponent,
  	HeaderComponent,
  	FooterComponent,
  	HomeComponent,
  	MoviesComponent,
  	MainMovieComponent,
  	MovieListComponent,
  	TVListComponent,
  	SearchComponent,
  	GenresComponent,
  	RecommendedListComponent,
  	MovieDetailedComponent,
  ],
  imports: [
  	BrowserModule,
  AppRoutingModule,
  HomeRoutingModule,
  MoviesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
