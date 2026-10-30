import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Align } from '@ui-components';
import { CommunicationService } from '../../services/communication.service';
import { HeaderComponent } from '../../../../../ui-components/src/lib/components/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'page-header',
    templateUrl: './header.page.html',
    styleUrls: ['./header.page.scss'],
    imports: [HeaderComponent, FormsModule]
})
export class HeaderPageComponent implements AfterViewInit, OnInit {
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

  private _communicationService: CommunicationService = inject(CommunicationService)

  ngOnInit() {
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
