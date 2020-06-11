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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

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
  MoviesRoutingModule,
  StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  StoreRouterConnectingModule.forRoot(),
  StoreModule.forRoot({}, {}),
  EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
