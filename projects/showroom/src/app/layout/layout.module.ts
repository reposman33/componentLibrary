import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoComponentsModule } from '../components/components.module';
import { LayoutComponent } from './layout.component';

@NgModule({
	declarations: [LayoutComponent],
	imports: [CommonModule, DemoComponentsModule, RouterModule],
})
export class LayoutModule {}
