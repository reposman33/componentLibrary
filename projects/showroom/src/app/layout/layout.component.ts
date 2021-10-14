import { Component } from '@angular/core';
import { Link } from '../models/Link';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
	public links: Link[] = [
		{ title: 'Header', url: 'header' },
		{ title: 'Logo', url: 'logo' },
	];
}
