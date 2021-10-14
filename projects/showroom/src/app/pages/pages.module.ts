import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPage } from './header/header.page';
import { HeaderModule, LogoModule } from '@ui-components';
import { LogoComponent } from './logo/logo.component';

@NgModule({
	declarations: [HeaderPage, LogoComponent],
	exports: [],
	imports: [CommonModule, HeaderModule, LogoModule],
})
export class PagesModule {}
