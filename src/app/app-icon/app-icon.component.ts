import { Component, Input } from '@angular/core';
import Project from '../../types/Project';
import { AppearanceService } from '../services/appearance.service';
import { getRandomDarkColor, getRandomLightColor } from '../../data/colors';

@Component({
	selector: 'app-app-icon',
	standalone: true,
	imports: [],
	templateUrl: './app-icon.component.html',
	styleUrl: './app-icon.component.scss',
})
export class AppIconComponent {
	@Input() project!: Project;
	isFiller = false;
	backgroundColor = '#000000';

	ngOnInit() {
		if (!this.project.name) {
			this.isFiller = true;
			return;
		}
		this.backgroundColor = AppearanceService.isDarkMode
			? getRandomDarkColor()
			: getRandomLightColor();
	}

	onClick() {
		if (this.isFiller) return;
		// open url in new tab
		window.open(this.project.url, '_blank');
	}
}
