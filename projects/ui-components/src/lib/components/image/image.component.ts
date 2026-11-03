import { Component, input, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'lib-image[imageUrl]',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
    imports: [NgClass]
})
export class ImageComponent {
	imageUrl = input<string>()
	alt = input<string>('')
	caption = input<string>('')
	expandable = input<boolean>(false)

	public expanded: boolean = false;
	public containerClass: string = 'container';
	public imageClass: string = 'image__thumbnail';

	ngOnInit() {
		this.imageClass += this.expandable() ? ' image--cursorPointer' : '';
	}

	expandImage() {
		if (this.expandable()) {
			this.expanded = !this.expanded;
			this.imageClass = this.expanded ? 'image__expanded' : 'image__thumbnail';
			this.imageClass += ' image--cursorPointer';
		}
	}
}
