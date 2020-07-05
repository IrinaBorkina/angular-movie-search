import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovie } from '../models/movie';
import { ITV } from '../models/tv';
import { IActor } from './../models/actor';
import { IReview } from '../models/review';
import { IVideo } from '../models/video';
import { IMovieCast, ITVCast } from '../models/cast';
import { IGenres } from '../models/genres';

@Injectable()
export class RepositoryService {
	public watchListArray: BehaviorSubject<any> = new BehaviorSubject([]);

	public apiKey: string = environment.apiKey;
	public url: string = environment.apiUrl;

	constructor(private http: HttpClient) {}

	public saveWatchList(watchList: IMovie[] | ITV[]): void {
		localStorage.setItem('watch-list', JSON.stringify(watchList));
		this.watchListArray.next(watchList);
	}

	public addToWatchList = (newList: []) => {
		this.watchListArray.next(newList);
	};

	public search(
		type: string,
		searchString: string,
		adult: boolean,
		language: string
	): Observable<IMovie | ITV> {
		return this.http.get<IMovie | ITV>(
			`${this.url}/search/${type}?api_key=${this.apiKey}&query=${searchString}&include_adult=${adult}&language=${language}`
		);
	}

	public getMovieDetails(id: number | undefined): Observable<IMovie> {
		return this.http.get<IMovie>(
			`${this.url}/movie/${id}?api_key=${this.apiKey}`
		);
	}

	public getTVShowDetails(tv_id: number | undefined): Observable<ITV> {
		return this.http.get<ITV>(
			`${this.url}/tv/${tv_id}?api_key=${this.apiKey}`
		);
	}

	public getMoviesGenres(): Observable<IGenres> {
		return this.http.get<IGenres>(
			`${this.url}/genre/movie/list?api_key=${this.apiKey}`
		);
	}

	public getTVShowsGenres(): Observable<IGenres> {
		return this.http.get<IGenres>(
			`${this.url}/genre/tv/list?api_key=${this.apiKey}`
		);
	}

	public getMoviesByGenre(id: number | undefined): Observable<IMovie> {
		return this.http.get<IMovie>(
			`${this.url}/discover/movie?api_key=${this.apiKey}&with_genres=${id}`
		);
	}

	public getTVShowsByGenre(genre_id: number | undefined): Observable<ITV> {
		return this.http.get<ITV>(
			`${this.url}/discover/tv?api_key=${this.apiKey}&with_genres=${genre_id}`
		);
	}

	public getMovieLatest(): Observable<IMovie> {
		return this.http.get<IMovie>(
			`${this.url}/movie/latest?api_key=${this.apiKey}`
		);
	}

	public getPopularMovies(): Observable<IMovie> {
		return this.http.get<IMovie>(
			`${this.url}/discover/movie?api_key=${this.apiKey}`
		);
	}

	public getNewMovies(): Observable<IMovie> {
		return this.http.get<IMovie>(
			`${this.url}/movie/now_playing?api_key=${this.apiKey}`
		);
	}

	public getPopularTVShows(): Observable<ITV> {
		return this.http.get<ITV>(
			`${this.url}/tv/popular?api_key=${this.apiKey}`
		);
	}

	public getTopRatedMovies(): Observable<IMovie> {
		return this.http.get<IMovie>(
			`${this.url}/movie/top_rated?api_key=${this.apiKey}&language=en-US`
		);
	}

	public getTopRatedTVShows(): Observable<ITV> {
		return this.http.get<ITV>(
			`${this.url}/tv/top_rated?api_key=${this.apiKey}&language=en-US`
		);
	}

	public getMovieCredits(id: number | undefined): Observable<IMovieCast> {
		return this.http.get<IMovieCast>(
			`${this.url}/movie/${id}/credits?api_key=${this.apiKey}`
		);
	}

	public getTVShowCredits(id: number | undefined): Observable<ITVCast> {
		return this.http.get<ITVCast>(
			`${this.url}/tv/${id}/credits?api_key=${this.apiKey}`
		);
	}

	public getMovieVideos(id: number | undefined): Observable<IVideo> {
		return this.http.get<IVideo>(
			`${this.url}/movie/${id}/videos?api_key=${this.apiKey}&language=en-US`
		);
	}

	public getTVShowVideos(id: number | undefined): Observable<IVideo> {
		return this.http.get<IVideo>(
			`${this.url}/tv/${id}/videos?api_key=${this.apiKey}&language=en-US`
		);
	}

	public getSimilarMovies(id: number | undefined): Observable<IMovie> {
		return this.http.get<IMovie>(
			`${this.url}/movie/${id}/similar?api_key=${this.apiKey}&language=en-US`
		);
	}

	public getMovieReviews(id: number | undefined): Observable<IReview> {
		return this.http.get<IReview>(
			`${this.url}/movie/${id}/reviews?api_key=${this.apiKey}&language=en-US`
		);
	}

	public getSimilarTVShows(id: number | undefined): Observable<ITV> {
		return this.http.get<ITV>(
			`${this.url}/tv/${id}/similar?api_key=${this.apiKey}&language=en-US`
		);
	}

	public getActorInfo(id: number | undefined): Observable<IActor> {
		return this.http.get<IActor>(
			`${this.url}/person/${id}?api_key=${this.apiKey}&language=en-US`
		);
	}

	public getActorCast(id: number | undefined): Observable<IMovie | ITV> {
		return this.http.get<IMovie | ITV>(
			`${this.url}/person/${id}/movie_credits?api_key=${this.apiKey}&language=en-US`
		);
	}

	public getPopularActors(): Observable<IActor> {
		return this.http.get<IActor>(
			`${this.url}/person/popular?api_key=${this.apiKey}&language=en-US`
		);
	}
}
