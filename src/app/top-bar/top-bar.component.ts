import { Component, Input } from '@angular/core';
import { AppearanceService } from '../services/appearance.service';
import { WindowManagerComponent } from '../window-manager/window-manager.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-top-bar',
	standalone: true,
	imports: [],
	templateUrl: './top-bar.component.html',
	styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
	@Input() mobile = false;

	signal = '';
	sound = 'up';
	cellular = 0;

	constructor(private router: Router) {
		// get random int between 0 and 2
		let randomInt = Math.floor(Math.random() * 3);
		if (randomInt != 0) {
			this.signal = '-' + randomInt;
		}
		randomInt = Math.floor(Math.random() * 3);
		if (randomInt == 0) {
			this.sound = 'down';
		}
		if (randomInt == 1) {
			this.sound = 'mute';
		}
		this.cellular = Math.floor(Math.random() * 4) + 1;
	}

	isDarkMode() {
		return AppearanceService.isDarkMode;
	}

	toggleDarkMode() {
		if (AppearanceService.isDarkMode) {
			AppearanceService.lightmode();
		} else {
			AppearanceService.darkmode();
		}
	}
	openSettings() {
		WindowManagerComponent.openSettingsWindow();
	}

	enforceMobile() {
		this.router.navigate(['/mobile/force']);
	}
}
