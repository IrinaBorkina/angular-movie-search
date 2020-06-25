import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvShowDetailsComponent } from './tv-show-details.component';

const routes: Routes = [
	{
		path: 'tv-show-details/:id',
		component: TvShowDetailsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TVShowDetailsRoutingModule {}
