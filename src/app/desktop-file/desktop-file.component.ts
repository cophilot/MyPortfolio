import { Component, Input } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import File from '../../types/File';
import { WindowManagerComponent } from '../window-manager/window-manager.component';

@Component({
	selector: 'app-desktop-file',
	standalone: true,
	imports: [CdkDrag],
	templateUrl: './desktop-file.component.html',
	styleUrl: './desktop-file.component.scss',
})
export class DesktopFileComponent {
	@Input() file: File = new File('default', 'default');

	top = 0;
	left = 0;

	static counter = 0;
	readonly id: number;

	openAnimation = false;

	constructor() {
		this.id = DesktopFileComponent.counter;
		DesktopFileComponent.counter++;
		this.top = DesktopFileComponent.getTopForId(this.id);
		this.left = DesktopFileComponent.getLeftForId(this.id);
	}

	static getTopForId(id: number): number {
		return 50 + 150 * (id % 4);
	}
	static getLeftForId(id: number): number {
		return 50 + 150 * Math.floor(id / 4);
	}

	open() {
		this.openAnimation = true;
		setTimeout(() => {
			this.openAnimation = false;
		}, 700);

		WindowManagerComponent.openTextWindow(this.file);
	}
}
