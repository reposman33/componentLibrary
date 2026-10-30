import { Component } from '@angular/core';

@Component({
    selector: 'app-tab-group',
    templateUrl: './tab-group.page.html',
    styleUrls: ['./tab-group.page.scss'],
    standalone: false
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
