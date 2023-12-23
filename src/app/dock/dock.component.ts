import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';
import Project from '../../types/Project';

@Component({
	selector: 'app-dock',
	standalone: true,
	imports: [],
	templateUrl: './dock.component.html',
	styleUrl: './dock.component.scss',
})
export class DockComponent {
	projects = Project.getEmptyArray();

	entered = false;

	showAnimation = false;

	constructor() {
		ProjectService.getProjects().then((projects: Project[]) => {
			this.projects = projects;
		});

		setTimeout(() => {
			if (!this.entered) {
				this.showAnimation = true;
			}
		}, 10000);
	}

	onMouseEnter() {
		this.entered = true;
		this.showAnimation = false;
	}
}
