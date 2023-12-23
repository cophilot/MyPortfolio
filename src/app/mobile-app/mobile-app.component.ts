import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundComponent } from '../background/background.component';

@Component({
	selector: 'app-mobile-app',
	standalone: true,
	imports: [BackgroundComponent],
	templateUrl: './mobile-app.component.html',
	styleUrl: './mobile-app.component.scss',
})
export class MobileAppComponent {
	constructor(private router: Router) {
		if (window.innerWidth >= 768) {
			router.navigate(['/']);
		}
	}
}
