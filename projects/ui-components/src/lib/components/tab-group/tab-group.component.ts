import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../../../models/Tab';

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
