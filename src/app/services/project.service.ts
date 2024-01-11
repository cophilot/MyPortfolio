import { Injectable } from '@angular/core';
import Project from '../../types/Project';

@Injectable({
	providedIn: 'root',
})
export class ProjectService {
	static projects = Project.getEmptyArray();

	static isInit = false;

	static async init() {
		if (this.isInit) {
			return;
		}

		const resp = await fetch(
			'https://raw.githubusercontent.com/cophilot/.project-provider/main/projects.json'
		);
		const jsonProjects = (await resp.json()) as any[];
		jsonProjects.forEach((jsonProject) => {
			if (jsonProject.name.toLowerCase() == 'myportfolio') {
				return;
			}
			this.projects.push(Project.fromJson(jsonProject));
			//}
		});

		this.isInit = true;
	}

	static async getProjects(): Promise<Project[]> {
		await this.init();
		return this.projects;
	}
}
