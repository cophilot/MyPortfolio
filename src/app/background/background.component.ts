import { Component } from '@angular/core';

@Component({
	selector: 'app-background',
	standalone: true,
	imports: [],
	templateUrl: './background.component.html',
	styleUrl: './background.component.scss',
})
export class BackgroundComponent {
	bars: any[] = [];

	constructor() {
		//let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink'];
		const colors = [
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
		let offsetTop = -500;
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
		console.log(this.bars);
	}
}
