import { Component, Input } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { DesktopFileComponent } from '../desktop-file/desktop-file.component';

@Component({
	selector: 'app-desktop-shortcut',
	standalone: true,
	imports: [CdkDrag],
	templateUrl: './desktop-shortcut.component.html',
})
export class DesktopShortcutComponent {
	@Input() url: string = '';
	@Input() img: string = '';
	@Input() name: string = '';

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

	openLink() {
		window.open(this.url, '_blank');
	}
}
