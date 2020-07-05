import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
	selector: 'app-recommended-list',
	templateUrl: './recommended-list.component.html',
	styleUrls: ['./recommended-list.component.scss'],
})
export class RecommendedListComponent implements OnInit {
	public recommendList?: {};
	public recommendTVList?: {};
	public limit: number = 4;

	constructor(private repositoryService: RepositoryService) {}

	public ngOnInit(): void {
		this.repositoryService.getTopRatedMovies().subscribe((res: any) => {
			this.recommendList = res['results'].slice(0, this.limit);
		});

		this.repositoryService.getTopRatedTVShows().subscribe((res: any) => {
			this.recommendTVList =  res['results'].slice(0, this.limit);
		});
	}
}
