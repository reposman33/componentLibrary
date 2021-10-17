import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule, LogoModule, TabGroupModule } from '@ui-components';
import { HeaderPage } from './header/header.page';
import { LogoComponent } from './logo/logo.component';
import { TabGroupPage } from './tab-group/tab-group.page';

@NgModule({
	declarations: [HeaderPage, LogoComponent, TabGroupPage],
	exports: [],
	imports: [CommonModule, HeaderModule, LogoModule, TabGroupModule],
})
export class PagesModule {}
