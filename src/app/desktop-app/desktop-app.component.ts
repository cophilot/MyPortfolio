import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { DockComponent } from '../dock/dock.component';
import { DesktopFileComponent } from '../desktop-file/desktop-file.component';
import { BackgroundComponent } from '../background/background.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import getDesktopFiles from '../data/desktopFiles';
import { WindowManagerComponent } from '../window-manager/window-manager.component';

@Component({
	selector: 'app-desktop-app',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		DockComponent,
		DesktopFileComponent,
		BackgroundComponent,
		TopBarComponent,
		WindowManagerComponent,
	],
	templateUrl: './desktop-app.component.html',
	styleUrl: './desktop-app.component.scss',
})
export class DesktopAppComponent {
	desktopFiles = getDesktopFiles();

	constructor(private router: Router) {
		// check if open on mobile
		if (window.innerWidth < 768) {
			router.navigate(['/mobile']);
		}
	}
}

function detectMobile() {
	const toMatch = [
		/Android/i,
		/webOS/i,
		/iPhone/i,
		/iPad/i,
		/iPod/i,
		/BlackBerry/i,
		/Windows Phone/i,
	];

	return toMatch.some((toMatchItem) => {
		return navigator.userAgent.match(toMatchItem);
	});
}
