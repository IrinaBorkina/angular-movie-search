import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { RepositoryService } from 'src/app/services/repository.service';
import {
	DomSanitizer,
	SafeResourceUrl,
	SafeUrl,
} from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
	@Input() public movie: Movie;
	// public movie: Movie;
	// @Input() public id: number;
	// public video;

	// public url: SafeUrl = 'https://www.youtube.com/embed/';
	// public urlSafe: SafeResourceUrl;

	constructor(
		private router: Router,
		public repositoryService: RepositoryService,
		private sanitizer: DomSanitizer
	) {}

	public ngOnInit(): void {
		// this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.video['key']);
		// console.log(this.urlSafe);
	}

	// public getMovieVideos(): void {
	// this.repositoryService.getMovieVideos(this.id).subscribe((res: any) => {
	// 	// console.log(res);
	// 	console.log('get videos');
	// 	if (res.results && res.results.length) {
	// 	  this.video = res.results[0];
	// 	  this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
	// 		  this.url + this.video['key']
	// 	  );
	// 	console.log(this.urlSafe);
	// 	return this.urlSafe;

	// console.log(this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']));
	// 	}
	// });
	// }
}
