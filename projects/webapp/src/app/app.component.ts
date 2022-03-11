import { Component } from '@angular/core';
import { ApiService } from '../../../api-modules/src/lib/services/api.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'webapp';
  aboutText$!: object;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCMSContent('about', 'nl').subscribe(
      (res) => (this.aboutText$ = res),
      (err) => console.error('ERROR: ', err)
    );
  }
}
