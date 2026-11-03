import { Component } from '@angular/core';
import { TextComponent } from '../../../../../ui-components/src/lib/components/text/text.component';
import { ImageComponent } from '../../../../../ui-components/src/lib/components/image/image.component';

@Component({
    selector: 'app-text',
    templateUrl: './text.page.html',
    styleUrls: ['./text.page.scss'],
    imports: [TextComponent, ImageComponent]
})
export class TextPageComponent {}
