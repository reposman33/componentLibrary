import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'lib-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
	@Input() title: string = '';
	@Input() subTitle: string = '';

	public drawerOpen: boolean = false;

	constructor() {}

	ngOnInit(): void {}
}
