import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-text',
    templateUrl: './text.page.html',
    styleUrls: ['./text.page.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TextPageComponent {}
