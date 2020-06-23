import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { RecommendedListComponent } from '../recommended-list/recommended-list.component';
import { PopularListComponent } from '../popular-list/popular-list.component';
import { NewListComponent } from '../new-list/new-list.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{
				path: 'new-list',
				component: NewListComponent,
			},
			{
				path: 'popular-list',
				component: PopularListComponent,
			},
			{
				path: 'recommended-list',
				component: RecommendedListComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule {}
