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

	constructor() {
		ProjectService.getProjects().then((projects: Project[]) => {
			this.projects = projects;
		});
	}
}
