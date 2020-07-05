import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TVShowsComponent } from './tv-shows.component';
import { TvGenresComponent } from './tv-genres/tv-genres.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { TVShowsRoutingModule } from './tv-shows-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
	declarations: [TVShowsComponent, TvGenresComponent, TvShowDetailsComponent],
	exports: [],
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		TVShowsRoutingModule,
		SharedModule,
	],
})
export class TvShowsModule {}
