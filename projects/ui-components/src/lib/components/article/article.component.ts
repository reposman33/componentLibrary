import { Component, Input, OnInit } from '@angular/core';
/**
 * TODO: Find out why uncommenting below import from api-modules library gives error as
 * error TS6059: File 'F:/www/personal-website/projects/api-modules/src/lib/services/api.service.ngtypecheck.ts'
 * is not under 'rootDir'
 * 'F:\www\personal-website\projects\ui-components\src'.
 * 'rootDir' is expected to contain all source files.
 */
// import { ApiService } from '../../../../../api-modules/src/lib';

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
