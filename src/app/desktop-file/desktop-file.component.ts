import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-desktop-file',
	standalone: true,
	imports: [CdkDrag],
	templateUrl: './desktop-file.component.html',
	styleUrl: './desktop-file.component.scss',
})
export class DesktopFileComponent {
	name = 'myFirstFile';
	top = 100;
	left = 10;

	constructor() {
		document.addEventListener('dragstart', this.onDragStart.bind(this));
		document.addEventListener('drag', this.onDrag.bind(this));
		document.addEventListener('drop', this.onDrop.bind(this));
	}

	onDragStart(event: any) {
		console.log('drag start');
	}

	// let the user drag the file

	onDrag(event: any) {
		//this.top = event.screenY;
		//this.left = event.screenX;
	}

	// let the user drop the file

	onDrop(event: any) {
		this.top = event.clientY;
		this.left = event.clientX;
	}
}
