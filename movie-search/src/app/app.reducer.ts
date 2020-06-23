import { ActionReducerMap } from '@ngrx/store';
import { Movie } from './models/movie';
import { movieSearchReducer } from './store/reducers/movie-search.reducer';

export interface AppState {
	movies: Movie[];
}

export const appReducers: ActionReducerMap<AppState> = {
	movies: movieSearchReducer,
};
