import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { NavItemComponent } from './nav-item';
import { NavListComponent } from './nav-list';
import { PageComponent } from './page';

const COMPONENTS = [HeaderComponent, NavItemComponent, NavListComponent, PageComponent];

@NgModule({
	declarations: COMPONENTS,
	exports: COMPONENTS,
	imports: [CommonModule],
})
export class DemoComponentsModule {}
