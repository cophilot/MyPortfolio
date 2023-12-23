import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { WindowManagerComponent } from '../window-manager/window-manager.component';

@Component({
	selector: 'app-window',
	standalone: true,
	imports: [CdkDrag],
	templateUrl: './window.component.html',
	styleUrl: './window.component.scss',
})
export class WindowComponent {
	@Input() id = -1;
	@Input() level = 10;
	@Input() overflow = false;

	maximize = false;
	minimized = false;

	left = 100;
	top = 100;

	offsetLeft = 0;
	offsetTop = 0;

	dragging = false;
	interval: any;

	static addedMouseMove = false;
	static mouseX = 0;
	static mouseY = 0;

	@ViewChild('mywindow') mywindow!: ElementRef;

	constructor() {
		document.addEventListener('mouseup', (event) => {
			this.stopDragging();
		});
		if (!WindowComponent.addedMouseMove) {
			document.addEventListener('mousemove', (event) => {
				WindowComponent.onMouseMove(event);
			});
			WindowComponent.addedMouseMove = true;
		}
	}

	toggleMaximize() {
		this.maximize = !this.maximize;
		if (this.maximize) {
			this.minimized = false;
			this.maximizeWindow();
		} else {
			this.unMaximizeWindow();
		}
	}
	toggleMinimized() {
		this.minimized = !this.minimized;
		if (this.minimized) {
			this.maximize = false;
		}
	}

	maximizeWindow() {
		this.left = 0;
		this.top = 27;
		this.mywindow.nativeElement.style.width = '100%';
		this.mywindow.nativeElement.style.height = 'calc(100% - 27px)';
	}

	unMaximizeWindow() {
		this.left = 100;
		this.top = 100;
		this.mywindow.nativeElement.style.width = '700px';
		this.mywindow.nativeElement.style.height = '500px';
	}

	startDragging(event: MouseEvent) {
		this.dragging = true;
		if (this.interval) clearInterval(this.interval);
		this.offsetLeft = WindowComponent.mouseX - this.left;
		this.offsetTop = WindowComponent.mouseY - this.top;
		this.interval = setInterval(() => {
			if (this.dragging) {
				this.left = WindowComponent.mouseX - this.offsetLeft;
				this.top = WindowComponent.mouseY - this.offsetTop;
			}
		}, 10);
	}

	stopDragging() {
		console.log('stop');
		this.dragging = false;
		if (this.interval) clearInterval(this.interval);
	}

	static onMouseMove(event: MouseEvent) {
		this.mouseX = event.clientX;
		this.mouseY = event.clientY;
	}

	close() {
		WindowManagerComponent.closeWindow(this.id);
	}
	focus() {
		WindowManagerComponent.focusWindow(this.id);
	}
}
