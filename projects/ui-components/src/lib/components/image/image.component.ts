import { Component, Input } from '@angular/core';

@Component({
	selector: 'lib-image[imageUrl]',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
	@Input() imageUrl!: string;
	@Input() alt: string = '';
	@Input() caption: string = '';
	@Input() expandable: boolean = false;

	public expanded: boolean = false;
	public containerClass: string = 'container';
	public imageClass: string = 'image__thumbnail';

	ngOnInit() {
		this.imageClass += this.expandable ? ' image--cursorPointer' : '';
	}

	expandImage() {
		if (this.expandable) {
			this.expanded = !this.expanded;
			this.imageClass = this.expanded ? 'image__expanded' : 'image__thumbnail';
			this.imageClass += ' image--cursorPointer';
		}
	}
}
