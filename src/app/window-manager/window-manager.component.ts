import { Component } from '@angular/core';
import File from '../../types/File';
import { WindowComponent } from '../window/window.component';
import { TextWindowComponent } from '../text-window/text-window.component';

@Component({
	selector: 'app-window-manager',
	standalone: true,
	imports: [WindowComponent, TextWindowComponent],
	templateUrl: './window-manager.component.html',
	styleUrl: './window-manager.component.scss',
})
export class WindowManagerComponent {
	static windows: any[] = [];

	static windowIDCounter = 0;

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
