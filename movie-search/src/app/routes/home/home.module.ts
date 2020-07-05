import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainMovieComponent } from './main-movie/main-movie.component';
import { RecommendedListComponent } from './recommended-list/recommended-list.component';
import { PopularListComponent } from './popular-list/popular-list.component';
import { NewListComponent } from './new-list/new-list.component';
import { PopularActorComponent } from './popular-actor/popular-actor.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/components/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		HomeComponent,
		MainMovieComponent,
		RecommendedListComponent,
		PopularListComponent,
		NewListComponent,
		PopularActorComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		HomeRoutingModule,
		SharedModule
	],
})
export class HomeModule {}
