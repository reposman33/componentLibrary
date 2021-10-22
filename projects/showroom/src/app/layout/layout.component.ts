import { Component } from '@angular/core';
import { Link } from '../models/Link';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
	public links: Link[] = [
		{ title: 'Article', url: 'article' },
		{ title: 'Header', url: 'header' },
		{ title: 'Image', url: 'image' },
		{ title: 'Logo', url: 'logo' },
		{ title: 'Tabgroup', url: 'tabgroup' },
		{ title: 'Text', url: 'text' },
	];
}
