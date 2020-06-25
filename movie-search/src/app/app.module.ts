import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TVListComponent } from './components/tv-list/tv-list.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { MainMovieComponent } from './components/main-movie/main-movie.component';
import { GenresComponent } from './components/genres/genres.component';
import { RecommendedListComponent } from './components/recommended-list/recommended-list.component';
import { MoviesRoutingModule } from './components/movies/movies-routing.module';
import { HomeRoutingModule } from './components/home/home-routing.module';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './app.reducer';
import { MovieSearchEffects } from './store/effects/movie-search.effects';

import { RepositoryService } from './services/repository.service';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SearchRoutingModule } from './components/search/search.routing';
import { MovieSearchFacade } from './store/movie-search.facade';
import { TVListRoutingModule } from './components/tv-list/tv-list-routing.module';
import { TvShowCardComponent } from './components/tv-show-card/tv-show-card.component';
import { PopularListComponent } from './components/popular-list/popular-list.component';
import { NewListComponent } from './components/new-list/new-list.component';
import { DetailsModule } from './components/details/details.module';
import { TvGenresComponent } from './components/tv-genres/tv-genres.component';
import { TVShowDetailsModule } from './components/tv-show-details/tv-show-details.module';
import { CastComponent } from './components/cast/cast.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		MoviesComponent,
		MainMovieComponent,
		TVListComponent,
		SearchComponent,
		GenresComponent,
		RecommendedListComponent,
		MovieCardComponent,
		TvShowCardComponent,
		SearchResultsComponent,
		TvShowCardComponent,
		PopularListComponent,
		NewListComponent,
		TvGenresComponent,
		// CastComponent
	],
	imports: [
	BrowserModule,
		CommonModule,
		HttpClientModule,
		FormsModule,
		AppRoutingModule,
		HomeRoutingModule,
		MoviesRoutingModule,
		TVListRoutingModule,
		SearchRoutingModule,
		DetailsModule,
		TVShowDetailsModule,
		StoreModule.forRoot(appReducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
		EffectsModule.forRoot([MovieSearchEffects]),
		StoreRouterConnectingModule.forRoot(),
	],
	providers: [RepositoryService, MovieSearchFacade],
	bootstrap: [AppComponent],
})
export class AppModule {}
