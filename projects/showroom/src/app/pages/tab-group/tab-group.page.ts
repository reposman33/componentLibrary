import { Component } from '@angular/core';
import { TabGroupComponent } from '../../../../../ui-components/src/lib/components/tab-group/tab-group.component';

@Component({
    selector: 'app-tab-group',
    templateUrl: './tab-group.page.html',
    styleUrls: ['./tab-group.page.scss'],
    imports: [TabGroupComponent]
})
export class TabGroupPageComponent {
	public tabs = [
		{
			title: 'About',
			section: 'over',
		},
		{
			title: 'Bio',
			section: 'bio',
		},
		{
			title: 'Portfolio',
			section: 'portfolio',
		},
		{
			title: 'Links',
			section: 'links',
		},
	];
}
