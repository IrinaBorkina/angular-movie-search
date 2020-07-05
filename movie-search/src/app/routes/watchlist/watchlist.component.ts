import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { IMovie } from 'src/app/models/movie';
import { ITV } from 'src/app/models/tv';

@Component({
	selector: 'app-watchlist',
	templateUrl: './watchlist.component.html',
	styleUrls: ['./watchlist.component.scss'],
})
export class WatchlistComponent implements OnInit {
	public list: string = '';
	public watchList: IMovie[] | ITV[] = [];
	public localStorageData?: string | null;

	constructor(public repositoryService: RepositoryService) {}

	public ngOnInit(): void {
		this.localStorageData = localStorage.getItem('watch-list');

		if (this.localStorageData) {
			this.watchList = JSON.parse(this.localStorageData) || [];
		} else {
			this.repositoryService.watchListArray.subscribe(
				(list: (IMovie[] | ITV[])) => (this.watchList = list)
			);
		}
	}

	public watchListRemove = (i: number) => {
		this.watchList.splice(i, 1);
		this.repositoryService.saveWatchList(this.watchList);
	};
}
