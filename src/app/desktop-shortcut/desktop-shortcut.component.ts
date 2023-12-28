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
		this.id = DesktopFileComponent.counter;
		DesktopFileComponent.counter++;
		this.top = DesktopFileComponent.getTopForId(this.id);
		this.left = DesktopFileComponent.getLeftForId(this.id);
	}

	openLink() {
		window.open(this.url, '_blank');
	}
}
