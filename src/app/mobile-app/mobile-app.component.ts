import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundComponent } from '../background/background.component';
import { AppIconComponent } from '../app-icon/app-icon.component';
import Project from '../../types/Project';
import { ProjectService } from '../services/project.service';
import detectMobile from '../../utils/detectMobile';

@Component({
	selector: 'app-mobile-app',
	standalone: true,
	imports: [BackgroundComponent, AppIconComponent],
	templateUrl: './mobile-app.component.html',
	styleUrl: './mobile-app.component.scss',
})
export class MobileAppComponent {
	projects: Project[] = [];

	constructor(private router: Router) {
		const isForcing = router.url.includes('force');
		//if (window.innerWidth >= 768 && !this.detectMobile()) {
		if (!detectMobile() && !isForcing) {
			router.navigate(['/']);
		}

		ProjectService.getProjects().then((projects: Project[]) => {
			this.projects = projects;
		});
	}

	goToDesktop() {
		this.router.navigate(['desktop/force']);
	}
}
