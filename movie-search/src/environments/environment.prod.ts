interface Environment {
	production: boolean;
	apiUrl: string;
	apiKey: string;
}

export const environment: Environment = {
	production: true,
	apiUrl: 'https://api.themoviedb.org/3',
	apiKey: '6b6f85bdc0a7f8e433b0fffb15b82336',
};
