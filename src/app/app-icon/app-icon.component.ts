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
	backgroundColor = '#000000';

	ngOnInit() {
		this.backgroundColor = AppearanceService.isDarkMode
			? getRandomDarkColor()
			: getRandomLightColor();
	}
}
