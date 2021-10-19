import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiModule } from '@api-modules';
import { TabGroupComponent } from './tab-group.component';
import { TabModule } from '../tab';

@NgModule({
	declarations: [TabGroupComponent],
	exports: [TabGroupComponent],
	imports: [CommonModule, RouterModule, ApiModule, TabModule],
})
export class TabGroupModule {}
