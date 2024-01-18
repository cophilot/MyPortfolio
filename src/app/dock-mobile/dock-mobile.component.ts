import { Component } from '@angular/core';

@Component({
	selector: 'app-dock-mobile',
	standalone: true,
	imports: [],
	templateUrl: './dock-mobile.component.html',
	styleUrl: './dock-mobile.component.scss',
})
export class DockMobileComponent {
	openLink(link: string) {
		if (link === '') return;
		window.open(link, '_blank');
	}
}
