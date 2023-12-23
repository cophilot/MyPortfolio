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
		DesktopFileComponent.counter++;
		this.id = DesktopFileComponent.counter;
		this.top = 50 + 150 * (this.id - 1);
		this.left = 50;
	}

	open() {
		this.openAnimation = true;
		setTimeout(() => {
			this.openAnimation = false;
		}, 700);

		WindowManagerComponent.openTextWindow(this.file);
	}
}
