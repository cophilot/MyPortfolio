import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { DockComponent } from '../dock/dock.component';
import { DesktopFileComponent } from '../desktop-file/desktop-file.component';
import { BackgroundComponent } from '../background/background.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
	selector: 'app-desktop-app',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		DockComponent,
		DesktopFileComponent,
		BackgroundComponent,
		TopBarComponent,
	],
	templateUrl: './desktop-app.component.html',
	styleUrl: './desktop-app.component.scss',
})
export class DesktopAppComponent {
	constructor(private router: Router) {
		// check if open on mobile
		if (window.innerWidth < 768) {
			router.navigate(['/mobile']);
		}
	}
}
