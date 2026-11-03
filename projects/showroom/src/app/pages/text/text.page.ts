import { Component } from '@angular/core';
import { ImageComponent, TextComponent } from '@ui-components';

@Component({
    selector: 'app-text',
    templateUrl: './text.page.html',
    styleUrls: ['./text.page.scss'],
    imports: [TextComponent, ImageComponent]
})
export class TextPageComponent {}
