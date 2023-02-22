import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoComponentsModule } from '../components/components.module';
import { LayoutComponent } from './layout.component';
import { CommunicationService } from '../services/communication.service';
import { FileService } from '../services/file.service';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, DemoComponentsModule, RouterModule],
  providers: [CommunicationService, FileService],
})
export class LayoutModule {}
