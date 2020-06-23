import { createReducer, on, ActionReducer, Action } from '@ngrx/store';
import { searchSuccess } from '../actions/movie-search.actions';
import { Movie } from 'src/app/models/movie';

export const initialState: Movie[] = [];

const _movieSearchReducer: ActionReducer<any[], Action> = createReducer(
	initialState,
	on(searchSuccess, (movies: Movie[]) => [...movies])
);

export function movieSearchReducer(state: any, action: any): Movie[] {
	return _movieSearchReducer(state, action);
}
