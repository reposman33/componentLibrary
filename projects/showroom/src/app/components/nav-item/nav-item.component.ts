import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-nav-item',
    templateUrl: './nav-item.component.html',
    styleUrls: ['./nav-item.component.scss'],
    imports: [RouterLink, RouterLinkActive]
})
export class NavItemComponent {
	url = input.required<string>();
}
