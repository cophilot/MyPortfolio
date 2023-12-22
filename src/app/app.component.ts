import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DockComponent } from './dock/dock.component';
import { DesktopFileComponent } from './desktop-file/desktop-file.component';
import { BackgroundComponent } from './background/background.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		DockComponent,
		DesktopFileComponent,
		BackgroundComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'my-portfolio';
}
