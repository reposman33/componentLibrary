import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'page-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {
  private url = 'https://localhost:4201/pages/header/header.page.html';
  displayCode: boolean = false;
  displayComponent: boolean = true;
  input_title = '';
  input_subTitle = '';
  input_align = 'left' as Align;

  constructor(
    private _communicationService: CommunicationService,
    private http: HttpClient
  ) {
    this._communicationService.getMessage().subscribe((viewMode) => {
      this.displayCode = viewMode.mode === 'code';
      this.displayComponent = viewMode.mode === 'component';
    });
  }

  ngOnInit() {
    this.httpHeaders.set('Accept', '*/*');
    this.http
      .get(this.url, { headers: this.httpHeaders, responseType: 'text' })
      .subscribe(
        (response) => {
          console.log('response = ', response);
        },
        (error) => {
          console.log('ERROR: ', error);
        },
        () => {
          console.log('complete');
        }
      );
  }
}
