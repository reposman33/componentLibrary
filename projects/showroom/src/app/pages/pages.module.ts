import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '@ui-components';
import { HeaderPage } from './header/header.page';

@NgModule({
	declarations: [HeaderPage],
	exports: [],
	imports: [CommonModule, HeaderModule],
})
export class PagesModule {}
