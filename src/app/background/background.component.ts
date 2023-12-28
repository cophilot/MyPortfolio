import { Component, Input } from '@angular/core';
import { AppearanceService } from '../services/appearance.service';
import { darkColors, lightColors } from '../../data/colors';

@Component({
	selector: 'app-background',
	standalone: true,
	imports: [],
	templateUrl: './background.component.html',
	styleUrl: './background.component.scss',
})
export class BackgroundComponent {
	static bars: any[] = [];

	@Input() mobile: boolean = false;

	constructor() {
		BackgroundComponent.init();
	}

	static init() {
		let offsetTop = -500;
		const colors = AppearanceService.isDarkMode ? lightColors : darkColors;
		while (offsetTop < window.innerHeight + 500) {
			offsetTop += Math.floor(Math.random() * 30 + 15);
			const color = colors[Math.floor(Math.random() * colors.length)];
			const height = Math.floor(Math.random() * 3) + 5;

			const rotate = Math.random() * 3 + 20;
			this.bars.push({
				color: color,
				offsetTop: offsetTop,
				height: height,
				rotate: rotate,
				zIndex: Math.floor(Math.random() * 2) === 0 ? -3 : -1,
			});
		}
	}

	static recolor() {
		this.bars.forEach((bar) => {
			bar.color = AppearanceService.isDarkMode
				? lightColors[Math.floor(Math.random() * lightColors.length)]
				: darkColors[Math.floor(Math.random() * darkColors.length)];
		});
	}

	getBars() {
		return BackgroundComponent.bars;
	}
}
