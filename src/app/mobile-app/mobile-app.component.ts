import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-mobile-app',
	standalone: true,
	imports: [],
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
