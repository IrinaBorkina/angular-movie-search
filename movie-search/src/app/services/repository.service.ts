import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RepositoryService {
	public apiKey: string;
	public url: string;

	constructor(private http: HttpClient) {
		this.apiKey = '6b6f85bdc0a7f8e433b0fffb15b82336';
		this.url = 'https://api.themoviedb.org/3';
	}

	public searchMovies(searchStr: string): Observable<{}> {
		return this.http.get(
			`${this.url}/search/movie?api_key=${this.apiKey}&query=${searchStr}&page=1&include_adult=false`
		);
	}

	public getMovie(id: number): Observable<{}> {
		return this.http.get(`${this.url}/movie/${id}?api_key=${this.apiKey}`);
	}

	public getTVShowDetails(tv_id: number): Observable<{}> {
		return this.http.get(`${this.url}/tv/${tv_id}?api_key=${this.apiKey}`);
	}

	public getGenres(): Observable<{}> {
		return this.http.get(
			`${this.url}/genre/movie/list?api_key=${this.apiKey}`
		);
	}

	public getTVShowsGenres(): Observable<{}> {
		return this.http.get(
			`${this.url}/genre/tv/list?api_key=${this.apiKey}`
		);
	}

	public getMoviesByGenre(id: number): Observable<{}> {
		return this.http.get(
			`${this.url}/discover/movie?api_key=${this.apiKey}&with_genres=${id}`
		);
	}

	public getTVShowsByGenre(id: number): Observable<{}> {
		return this.http.get(
			`${this.url}/discover/tv?api_key=${this.apiKey}&with_genres=${id}`
		);
	}

	public getMovieLatest(): Observable<{}> {
		return this.http.get(`${this.url}/movie/latest?api_key=${this.apiKey}`);
	}

	public getPopularMovies(): Observable<{}> {
		return this.http.get(
			`${this.url}/discover/movie?api_key=${this.apiKey}`
		);
	}

	public getNewMovies(): Observable<{}> {
		return this.http.get(
			`${this.url}/movie/now_playing?api_key=${this.apiKey}`
		);
	}

	public getUpcomingMovies(): Observable<{}> {
		return this.http.get(
			`${this.url}/movie/upcoming?api_key=${this.apiKey}`
		);
	}

	public getPopularTVShows(): Observable<{}> {
		return this.http.get(`${this.url}/tv/popular?api_key=${this.apiKey}`);
	}

	public getTopRatedTVShows(): Observable<{}> {
		return this.http.get(
			`${this.url}/tv/top_rated?api_key=${this.apiKey}&language=en-US`
		);
	}

	public getTrending(): Observable<{}> {
		return this.http.get(
			`${this.url}/trending/all/day?api_key=${this.apiKey}`
		);
	}

	// public getMovieVideos(id: number): Observable<{}> {
	// return this.http.get(
	// 	`${this.url}/movie/${id}/videos?api_key=${this.apiKey}&language=en-US`
	// );
	// }
}
