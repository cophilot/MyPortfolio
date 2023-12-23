import { Component } from '@angular/core';
import { AppearanceService } from '../services/appearance.service';

@Component({
	selector: 'app-background',
	standalone: true,
	imports: [],
	templateUrl: './background.component.html',
	styleUrl: './background.component.scss',
})
export class BackgroundComponent {
	static bars: any[] = [];

	static lightColors = [
		'#39FF14',
		'#0AC2C8',
		'#FF2079',
		'#FF00F6',
		'#1B03A3',
		'#FF006E',
		'#FFD300',
		'#FF3700',
		'#00C2FF',
		'#001AFF',
		'#FFBD03',
		'#FF00C8',
		'#FF8E00',
		'#FF00BF',
		'#00FF85',
		'#00FFAA',
		'#00FF00',
		'#00FF1E',
		'#00FF55',
		'#00FF9A',
	];

	static darkColors = [
		'#1D2B64',
		'#7E2553',
		'#008751',
		'#AB5236',
		'#5F574F',
		'#C2C3C7',
		'#FF004D',
		'#FFA300',
		'#FFEC27',
		'#00E436',
		'#29ADFF',
		'#83769C',
		'#FF77A8',
		'#FFCCAA',
		'#291814',
		'#111D35',
		'#422136',
		'#125359',
		'#005452',
		'#1B2632',
	];
	constructor() {
		BackgroundComponent.init();
	}

	static init() {
		let offsetTop = -500;
		const colors = AppearanceService.isDarkMode
			? BackgroundComponent.lightColors
			: BackgroundComponent.darkColors;
		while (offsetTop < window.innerHeight + 500) {
			offsetTop += Math.floor(Math.random() * 30 + 15);
			const color = colors[Math.floor(Math.random() * colors.length)];
			const height = Math.floor(Math.random() * 3) + 2;

			const rotate = Math.random() * 3 + 20;
			this.bars.push({
				color: color,
				offsetTop: offsetTop,
				height: height,
				rotate: rotate,
			});
		}
	}

	static recolor() {
		this.bars.forEach((bar) => {
			bar.color = AppearanceService.isDarkMode
				? BackgroundComponent.lightColors[
						Math.floor(Math.random() * BackgroundComponent.lightColors.length)
					]
				: BackgroundComponent.darkColors[
						Math.floor(Math.random() * BackgroundComponent.darkColors.length)
					];
		});
	}

	getBars() {
		return BackgroundComponent.bars;
	}
}
