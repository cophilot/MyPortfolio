import { Injectable } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';

@Injectable({
	providedIn: 'root',
})
export class AppearanceService {
	static isDarkMode = false;

	static init() {
		if (this.detectPrefersColorScheme() === 'light') {
			this.lightmode();
		} else {
			this.darkmode();
		}
	}

	static detectPrefersColorScheme(): string {
		// Detect if prefers-color-scheme is supported
		if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
			// Set colorScheme to Dark if prefers-color-scheme is dark. Otherwise, set it to Light.
			return window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
		} else {
			// If the browser does not support prefers-color-scheme, set the default to dark.
			return 'light';
		}
	}

	static darkmode() {
		document.documentElement.setAttribute('data-theme', 'dark');
		this.isDarkMode = true;
		BackgroundComponent.recolor();
	}

	static lightmode() {
		this.isDarkMode = false;
		document.documentElement.setAttribute('data-theme', 'light');
		BackgroundComponent.recolor();
	}
}
