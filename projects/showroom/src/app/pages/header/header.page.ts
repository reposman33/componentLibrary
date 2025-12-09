import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Align, HeaderComponent } from '@ui-components';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'page-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements AfterViewInit {
  htmlRef = `        <lib-header
          [align]="input_align"
          [title]="input_title"
          [subTitle]="input_subTitle"
        >
`;
  displayCode: boolean = false;
  displayComponent: boolean = true;
  code!: string | null;
  input_title = 'Moby Dick';
  input_subTitle = 'een verhaal over moed en wanhoop';
  input_align = 'left' as Align;

  constructor(private _communicationService: CommunicationService) {
    this._communicationService.getMessage().subscribe((viewMode) => {
      this.displayCode = viewMode.mode === 'code';
      this.displayComponent = viewMode.mode === 'component';
    });
  }

  ngAfterViewInit() {
    this.code = this.htmlRef;
    console.log(this.code);
  }
}
