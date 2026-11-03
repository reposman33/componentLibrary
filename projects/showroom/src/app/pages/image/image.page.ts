import { Component } from '@angular/core';
import { ImageComponent } from '@ui-components';

@Component({
    selector: 'app-image',
    templateUrl: './image.page.html',
    styleUrls: ['./image.page.scss'],
    imports: [ImageComponent]
})
export class ImagePageComponent {
}
