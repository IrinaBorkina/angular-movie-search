import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowCardComponent } from './tv-show-card/tv-show-card.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { CastComponent } from './cast/cast.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [TvShowCardComponent, MovieCardComponent, CastComponent],
	exports: [TvShowCardComponent, MovieCardComponent, CastComponent],
	imports: [CommonModule, RouterModule],
})
export class SharedModule {}
