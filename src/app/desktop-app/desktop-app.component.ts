import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { DockComponent } from '../dock/dock.component';
import { DesktopFileComponent } from '../desktop-file/desktop-file.component';
import { BackgroundComponent } from '../background/background.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import getDesktopFiles from '../../data/desktopFiles';
import { WindowManagerComponent } from '../window-manager/window-manager.component';
import { DesktopShortcutComponent } from '../desktop-shortcut/desktop-shortcut.component';
import detectMobile from '../../utils/detectMobile';
import getDesktopShortcuts from '../../data/desktopShortcuts';

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
		DesktopShortcutComponent,
	],
	templateUrl: './desktop-app.component.html',
	styleUrl: './desktop-app.component.scss',
})
export class DesktopAppComponent {
	desktopFiles = getDesktopFiles();
	desktopShortcuts = getDesktopShortcuts();

	constructor(private router: Router) {
		// check if open on mobile
		const isForcing = router.url.includes('force');

		//if (window.innerWidth < 768 && this.detectMobile()) {
		if (detectMobile() && !isForcing) {
			router.navigate(['/mobile']);
		}
	}
}
