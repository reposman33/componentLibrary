import { Component, input } from '@angular/core';
@Component({
    selector: 'lib-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
	imageUrl = input<string>()
	alt = input<string>('')

	constructor() {}
}
