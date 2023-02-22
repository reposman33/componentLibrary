import { Component } from '@angular/core';
import { displayMode } from '../../models/Types';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'page-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage {
  code = '';
  displayCode: boolean = false;
  displayComponent: boolean = true;

  constructor(private communicationService: CommunicationService) {
    this.communicationService.getMessage().subscribe((viewMode) => {
      this.displayCode = viewMode.mode === 'code';
      this.displayComponent = viewMode.mode === 'component';
    });
  }
}
