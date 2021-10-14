import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPage } from './header/header.page';
import { HeaderModule } from '@ui-components';

@NgModule({
	declarations: [HeaderPage],
	exports: [],
	imports: [CommonModule, HeaderModule],
})
export class PagesModule {}
