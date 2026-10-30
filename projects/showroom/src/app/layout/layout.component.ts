import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { displayMode, Link } from '../models/Types';
import { CommunicationService } from '../services/communication.service';
import { HeaderComponent } from '../components/header/header.component';
import { NavListComponent } from '../components/nav-list/nav-list.component';
import { NavItemComponent } from '../components/nav-item/nav-item.component';
import { PageComponent } from '../components/page/page.component';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    imports: [HeaderComponent, NavListComponent, NavItemComponent, PageComponent, NgClass, RouterOutlet]
})
export class LayoutComponent implements OnInit {
  private communicationService: CommunicationService = inject(CommunicationService)

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

  constructor() {}

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
