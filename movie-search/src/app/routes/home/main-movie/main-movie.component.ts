import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
	selector: 'app-main-movie',
	templateUrl: './main-movie.component.html',
	styleUrls: ['./main-movie.component.scss'],
})
export class MainMovieComponent implements OnInit {
	@Input() public movie?: IMovie;

	public newList?: {};
	public limit: number = 1;

	constructor(private repositoryService: RepositoryService) {}

	public ngOnInit(): void {
		this.repositoryService.getNewMovies().subscribe((res: any) => {
			this.newList = res['results'].slice(0, this.limit);
		});

		this.addClassWithBg();
	}

	public addClassWithBg(): void {
		const homeBg: Element | null = document.querySelector('.poster');
		homeBg?.classList.add('bg');
	}
}
