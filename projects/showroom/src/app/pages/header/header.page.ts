import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Align } from '@ui-components';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'page-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements AfterViewInit {
  @ViewChild('html', { read: ElementRef }) htmlRef!: ElementRef;
  displayCode: boolean = false;
  displayComponent: boolean = true;
  code!: string | null;
  input_title = '';
  input_subTitle = '';
  input_align = 'left' as Align;

  constructor(private _communicationService: CommunicationService) {
    this._communicationService.getMessage().subscribe((viewMode) => {
      this.displayCode = viewMode.mode === 'code';
      this.displayComponent = viewMode.mode === 'component';
    });
  }

  ngAfterViewInit() {
    this.code = this.htmlRef.nativeElement.innerHTML;
    console.log(this.code);
  }
}
