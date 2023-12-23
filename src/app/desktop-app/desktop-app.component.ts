import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DockComponent } from '../dock/dock.component';
import { DesktopFileComponent } from '../desktop-file/desktop-file.component';
import { BackgroundComponent } from '../background/background.component';

@Component({
	selector: 'app-desktop-app',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		DockComponent,
		DesktopFileComponent,
		BackgroundComponent,
	],
	templateUrl: './desktop-app.component.html',
	styleUrl: './desktop-app.component.scss',
})
export class DesktopAppComponent {}
