import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundComponent } from '../background/background.component';
import { AppIconComponent } from '../app-icon/app-icon.component';
import Project from '../../types/Project';
import { ProjectService } from '../services/project.service';
import detectMobile from '../../utils/detectMobile';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { DockMobileComponent } from '../dock-mobile/dock-mobile.component';

@Component({
	selector: 'app-mobile-app',
	standalone: true,
	imports: [
		BackgroundComponent,
		AppIconComponent,
		TopBarComponent,
		DockMobileComponent,
	],
	templateUrl: './mobile-app.component.html',
	styleUrl: './mobile-app.component.scss',
})
export class MobileAppComponent {
	projects: Project[][] = [];

	constructor(private router: Router) {
		const isForcing = router.url.includes('force');
		//if (window.innerWidth >= 768 && !this.detectMobile()) {
		if (!detectMobile() && !isForcing) {
			router.navigate(['/']);
		}

		ProjectService.getProjects().then((projects: Project[]) => {
			for (let i = 0; i < projects.length; i += 4) {
				this.projects.push(projects.slice(i, i + 4));
			}
			const fillUps = 4 - this.projects[this.projects.length - 1].length;
			for (let i = 0; i < fillUps; i++) {
				this.projects[this.projects.length - 1].push({} as Project);
			}
		});
	}

	goToDesktop() {
		this.router.navigate(['desktop/force']);
	}
}
