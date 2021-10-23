import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabGroupComponent } from './tab-group.component';
import { TabModule } from '../tab';

@NgModule({
	declarations: [TabGroupComponent],
	exports: [TabGroupComponent],
	imports: [CommonModule, RouterModule, TabModule],
})
export class TabGroupModule {}
