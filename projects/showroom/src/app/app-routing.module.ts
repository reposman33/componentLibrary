import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		pathMatch: 'full',
		children: [{ path: '', component: LandingComponent }],
	},
];

@NgModule({
	declarations: [],
	imports: [PagesModule, RouterModule.forRoot(routes)],
	exports: [],
})
export class AppRoutingModule {}
