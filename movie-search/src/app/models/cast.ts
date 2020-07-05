export interface ITVCast {
	id: number;
	cast: [
		ITVCastInfo
	];
}

export interface ITVCastInfo {
	cast_id: number;
	character: string;
	credit_id: string;
	gender: number;
	id: number;
	name: string;
	order: number;
	profile_path: string;
}

export interface IMovieCast {
	cast: [
		{
			character: string;
			credit_id: string;
			gender: number;
			id: number;
			name: string;
			order: number;
			profile_path: string;
		}
	];
}
