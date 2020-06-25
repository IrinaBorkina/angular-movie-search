import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RepositoryService {
	public apiKey: string = environment.apiKey;
	public url: string = environment.apiUrl;

	constructor(private http: HttpClient) {}

	public searchMovies(searchString: string): Observable<{}> {
		return this.http.get(
			`${this.url}/search/multi?api_key=${this.apiKey}&query=${searchString}&page=1&include_adult=false`
		);
	}

	public getMovieDetails(id: number): Observable<{}> {
		return this.http.get(
			`${this.url}/movie/${id}?api_key=${this.apiKey}&append_to_response=videos`
		);
	}

	public getTVShowDetails(tv_id: number): Observable<{}> {
		return this.http.get(`${this.url}/tv/${tv_id}?api_key=${this.apiKey}`);
	}

	public getMoviesGenres(): Observable<{}> {
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

	public getTVShowsByGenre(genre_id: number): Observable<{}> {
		return this.http.get(
			`${this.url}/discover/tv?api_key=${this.apiKey}&with_genres=${genre_id}`
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

	public getMovieCredits(id: number): Observable<{}> {
		return this.http.get(
			`${this.url}/movie/${id}/credits?api_key=${this.apiKey}`
		);
	}

	public getTVShowCredits(id: number): Observable<{}> {
		return this.http.get(
			`${this.url}/tv/${id}/credits?api_key=${this.apiKey}`
		);
	}

	public getMovieVideos(id: number): Observable<{}> {
		return this.http.get(
			`${this.url}/movie/${id}/videos?api_key=${this.apiKey}&language=en-US`
		);
	}

	public getTVShowVideos(id: number): Observable<{}> {
		return this.http.get(
			`${this.url}/tv/${id}/videos?api_key=${this.apiKey}&language=en-US`
		);
	}
}
