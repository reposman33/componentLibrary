import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './tab-group.component';

@NgModule({
	declarations: [TabGroupComponent],
	exports: [TabGroupComponent],
	imports: [CommonModule],
})
export class TabGroupModule {}
