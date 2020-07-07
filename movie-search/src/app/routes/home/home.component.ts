import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { RepositoryService } from 'src/app/services/repository.service';

export enum Tabs {
	New = 'New',
	Popular = 'Popular',
	Recommended = 'Recommended',
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	@Input() public movie?: IMovie;
	@Input() public cast: [] = [];

	public newMovie?: IMovie[];
	public popularMovie?: IMovie[];
	public limitNewMovies: number = 1;
	public limit: number = 3;
	public limitActors: number = 6;

	public Tabs: typeof Tabs = Tabs;
	public tab: Tabs = Tabs.New;

	constructor(private repositoryService: RepositoryService) {}

	public ngOnInit(): void {
		this.repositoryService.getNewMovies().subscribe((res: any) => {
			const moviesArray: IMovie[] = [];
			moviesArray.push(
				res['results'][
					Math.floor(Math.random() * res['results'].length)
				]
			);
			this.newMovie = moviesArray;
		});

		this.repositoryService.getPopularMovies().subscribe((res: any) => {
			this.popularMovie = res['results'].slice(0, this.limit);
		});

		this.repositoryService.getPopularActors().subscribe((res: any) => {
			res['results'] = res['results'].filter((item: any) => {
				return item.popularity;
			});
			this.cast = res['results'].slice(0, this.limitActors);
		});
	}

	public switch(item: any): void {
		switch (item) {
			case 'Popular':
				this.tab = Tabs.Popular;
				break;
			case 'Recommended':
				this.tab = Tabs.Recommended;
				break;
			default:
				this.tab = Tabs.New;
		}
	}

	public activeTab(e: Event): void {
		const MENU_LIST: NodeListOf<Element> = document.querySelectorAll('.link');

		MENU_LIST.forEach((el: Element) => el.classList.remove('active'));
		if (e.target) {
			(e.target as HTMLInputElement).classList.add('active');
		}
	}
}
