import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private titleService: Title = inject(Title)
  public title: string = 'Showroom';

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
