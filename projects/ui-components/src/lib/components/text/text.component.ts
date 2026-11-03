import { Component, input } from '@angular/core';

@Component({
    selector: 'lib-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss']
})
export class TextComponent {
    title = input<string>('title')
	subTitle = input<string>('subTitle')

	public titleSeparator: string = '|';
}
