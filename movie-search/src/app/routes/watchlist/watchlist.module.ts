import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './watchlist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WatchlistRoutingModule } from './watchlist-routing.module';

@NgModule({
	declarations: [WatchlistComponent],
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		WatchlistRoutingModule,
	],
})
export class WatchlistModule {}
