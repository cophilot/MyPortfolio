import { Component, Input } from '@angular/core';
import { WindowComponent } from '../../window/window.component';
import { AppearanceService } from '../appearance.service';

@Component({
	selector: 'app-settings-window',
	standalone: true,
	imports: [WindowComponent],
	templateUrl: './settings-window.component.html',
	styleUrl: './settings-window.component.scss',
})
export class SettingsWindowComponent {
	@Input() id = -1;
	@Input() level = 10;

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
}
