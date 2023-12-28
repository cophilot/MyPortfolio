import { Component } from '@angular/core';
import File from '../../types/File';
import { WindowComponent } from '../window/window.component';
import { TextWindowComponent } from '../text-window/text-window.component';
import { SettingsWindowComponent } from '../settings-window/settings-window.component';
import { ProjectWindowComponent } from '../project-window/project-window.component';
import Project from '../../types/Project';

@Component({
	selector: 'app-window-manager',
	standalone: true,
	imports: [
		WindowComponent,
		TextWindowComponent,
		SettingsWindowComponent,
		ProjectWindowComponent,
	],
	templateUrl: './window-manager.component.html',
	styleUrl: './window-manager.component.scss',
})
export class WindowManagerComponent {
	static windows: any[] = [];

	static windowIDCounter = 0;

	static openSettingsWindow() {
		const settingsWindow = this.windows.find(
			(window) => window.type == 'settings'
		);
		if (settingsWindow) {
			this.focusWindow(settingsWindow.id);
			return;
		}

		this.decreaseLevel();
		WindowManagerComponent.windows.push({
			id: WindowManagerComponent.windowIDCounter,
			type: 'settings',
			level: 0,
		});
		WindowManagerComponent.windowIDCounter++;
	}

	static openTextWindow(file: File) {
		this.decreaseLevel();
		WindowManagerComponent.windows.push({
			id: WindowManagerComponent.windowIDCounter,
			type: 'text',
			file: file,
			level: 0,
		});
		WindowManagerComponent.windowIDCounter++;
	}

	static openProjectWindow(project: Project) {
		const projectWindows = this.windows.filter(
			(window) => window.type == 'project'
		);

		for (const window of projectWindows) {
			if (window.project.name == project.name) {
				this.focusWindow(window.id);
				return;
			}
		}

		this.decreaseLevel();
		WindowManagerComponent.windows.push({
			id: WindowManagerComponent.windowIDCounter,
			type: 'project',
			project: project,
			level: 0,
		});
		WindowManagerComponent.windowIDCounter++;
	}

	static isProjectWindowOpen(project: Project): boolean {
		const projectWindows = this.windows.filter(
			(window) => window.type == 'project'
		);

		for (const window of projectWindows) {
			if (window.project.name == project.name) {
				return true;
			}
		}

		return false;
	}

	static closeWindow(id: number) {
		WindowManagerComponent.windows = WindowManagerComponent.windows.filter(
			(window) => window.id !== id
		);
		if (this.windows.length == 1) {
			this.windows[0].level = 0;
		}
	}

	static focusWindow(id: number) {
		WindowManagerComponent.windows.forEach((window) => {
			if (window.id == id) {
				window.level = 0;
			} else {
				window.level++;
			}
		});
	}

	static decreaseLevel() {
		WindowManagerComponent.windows.forEach((window) => {
			window.level++;
		});
	}

	getWindows() {
		return WindowManagerComponent.windows;
	}
}
