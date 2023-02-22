import { Component } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'page-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage {
  code = '';
  htmlFilePath = 'header/header.component.html';
  displayCode: boolean = false;
  displayComponent: boolean = true;

  constructor(
    private _communicationService: CommunicationService,
    private _fileService: FileService
  ) {
    this._communicationService.getMessage().subscribe((viewMode) => {
      this.displayCode = viewMode.mode === 'code';
      this.displayComponent = viewMode.mode === 'component';
    });
  }

  ngAfterViewInit() {
    this._fileService
      .readFile(this.htmlFilePath)
      .then((data) => (this.code = data));
  }
}
