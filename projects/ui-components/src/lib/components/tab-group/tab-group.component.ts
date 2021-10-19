import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '@api-modules';
import { Observable, Observer } from 'rxjs';
import { Tab } from '@ui-components/models/Tab';

type Data = {
	data: string;
};
@Component({
	selector: 'lib-tab-group',
	templateUrl: './tab-group.component.html',
	styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements OnInit {
	@Input() tabs: Tab[] = [];
	public selectedTab: string = '';

	ngOnInit(): void {
		this.selectedTab = this.tabs[0].title;
	}

	// unhilite tabs when new tab becomes active
	selectTab(tabTitle: string) {
		this.selectedTab = tabTitle;
	}
}
