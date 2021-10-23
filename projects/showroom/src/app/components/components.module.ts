import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { PageComponent } from './page/page.component';

const COMPONENTS = [HeaderComponent, NavItemComponent, NavListComponent, PageComponent];

@NgModule({
	declarations: COMPONENTS,
	exports: COMPONENTS,
	imports: [CommonModule, RouterModule],
})
export class DemoComponentsModule {}
