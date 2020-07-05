import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TVShowsComponent } from './tv-shows.component';

const routes: Routes = [
	{
		path: '',
		component: TVShowsComponent,
	},
	{
		path: ':id/:name',
		component: TVShowsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TVShowsRoutingModule {}
