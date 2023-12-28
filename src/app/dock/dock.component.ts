import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';
import Project from '../../types/Project';
import { WindowManagerComponent } from '../window-manager/window-manager.component';

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

	openWindow(project: Project) {
		WindowManagerComponent.openProjectWindow(project);
	}
	isProjectActive(project: Project): boolean {
		return WindowManagerComponent.isProjectWindowOpen(project);
	}

	onMouseEnter() {
		this.entered = true;
		this.showAnimation = false;
	}
}
