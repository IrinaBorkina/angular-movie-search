export interface MovieDetails {
	adult: boolean;
	backdrop_path: null;
	belongs_to_collection: null;
	budget: number;
	genres: [
		{
			id: number;
			name: string;
		}
	];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: null;
	production_companies: [];
	production_countries: [];
	release_date: number;
	revenue: number;
	runtime: number;
	spoken_languages: [];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
