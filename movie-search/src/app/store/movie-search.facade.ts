import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '../models/movie';
import { searchSuccess, search } from './actions/movie-search.actions';
import { movieSearchReducer } from './reducers/movie-search.reducer';
import { Observable } from 'rxjs';

import * as actions from './actions/movie-search.actions';
import { TypedAction } from '@ngrx/store/src/models';

@Injectable()
export class MovieSearchFacade {
	public searchMovies$: Observable<TypedAction<'[Movie] Search'>> = this.store.select(search);

	constructor(private store: Store<Movie>) {}

	// public searchMovie() {
	// 	this.store.dispatch(search());
	// }
}
