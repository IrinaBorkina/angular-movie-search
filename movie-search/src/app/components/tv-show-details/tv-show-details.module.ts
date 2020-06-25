import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowDetailsComponent } from './tv-show-details.component';
import { TVShowDetailsRoutingModule } from './tv-show-details.routing';
import { CastComponent } from '../cast/cast.component';

@NgModule({
	declarations: [TvShowDetailsComponent],
	imports: [CommonModule, TVShowDetailsRoutingModule],
	exports: [],
	providers: [],
	bootstrap: [TvShowDetailsComponent],
})
export class TVShowDetailsModule {}
