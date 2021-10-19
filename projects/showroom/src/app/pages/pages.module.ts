import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule, LogoModule, TabGroupModule } from '@ui-components/lib';
import { HeaderPage } from './header/header.page';
import { LogoComponent } from './logo/logo.component';
import { TabGroupPage } from './tab-group/tab-group.page';

@NgModule({
	declarations: [HeaderPage, LogoComponent, TabGroupPage],
	exports: [],
	imports: [CommonModule, RouterModule, HeaderModule, LogoModule, TabGroupModule],
})
export class PagesModule {}
