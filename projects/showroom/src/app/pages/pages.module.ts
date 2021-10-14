import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPage } from './header/header.page';
import { HeaderModule } from '@ui-components';
import { LogoComponent } from './logo/logo.component';

@NgModule({
	declarations: [HeaderPage, LogoComponent],
	exports: [],
	imports: [CommonModule, HeaderModule],
})
export class PagesModule {}
