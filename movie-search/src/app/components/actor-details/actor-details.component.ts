import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { RepositoryService } from 'src/app/services/repository.service';
import { IActor } from 'src/app/models/actor';
import { IMovie } from 'src/app/models/movie';

@Component({
	selector: 'app-actor-details',
	templateUrl: './actor-details.component.html',
	styleUrls: ['./actor-details.component.scss'],
})
export class ActorDetailsComponent implements OnInit, OnDestroy {
	public subscription$?: Subscription;
	public id?: number | undefined;
	public person?: IActor;
	public movies?: IMovie[];

	constructor(
		private route: ActivatedRoute,
		private repositoryService: RepositoryService
	) {}

	public ngOnInit(): void {
		this.subscription$ = this.route.params.subscribe((params: Params) => {
			this.id = params['id'];

			this.repositoryService
				.getActorInfo(this.id)
				.subscribe((res: any) => {
					this.person = res;
				});

			this.repositoryService
				.getActorCast(this.id)
				.subscribe((res: any) => {
					this.movies = res['cast'];
				});
		});
	}

	public ngOnDestroy(): void {
		if (this.subscription$) {
			this.subscription$.unsubscribe();
		}
	}
}
