import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { displayMode, Link } from '../models/Types';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  mode: displayMode = 'component';

  public links: Link[] = [
    { title: 'Article', url: 'article' },
    { title: 'Header', url: 'header' },
    { title: 'Image', url: 'image' },
    { title: 'Logo', url: 'logo' },
    { title: 'Tabgroup', url: 'tabgroup' },
    { title: 'Text', url: 'text' },
    { title: 'Toggle', url: 'toggle' },
  ];

  pageViewMode: displayMode = 'component';
  UpdateComponentView!: Observable<displayMode>;

  constructor(private communicationService: CommunicationService) {}

  getPageViewMode() {
    return this.pageViewMode;
  }

  setPageViewMode(mode: displayMode) {
    this.communicationService.sendMessage({ viewMode: mode });
    this.pageViewMode = mode;
  }

  ngOnInit() {
    this.UpdateComponentView = new Observable((observer) => {
      observer.next(this.getPageViewMode());
    });
  }
}
