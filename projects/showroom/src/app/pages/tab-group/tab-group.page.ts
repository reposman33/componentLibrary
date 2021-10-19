import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tab-group',
	templateUrl: './tab-group.page.html',
	styleUrls: ['./tab-group.page.scss'],
})
export class TabGroupPage implements OnInit {
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
	];
	constructor() {}

	ngOnInit(): void {}
}
