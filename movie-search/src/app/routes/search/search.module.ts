import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SharedModule } from 'src/app/components/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
	declarations: [SearchComponent, SearchResultsComponent],
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		SearchRoutingModule,
		SharedModule,
	],
})
export class SearchModule {}
