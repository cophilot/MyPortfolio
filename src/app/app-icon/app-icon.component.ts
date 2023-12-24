import { Component, Input } from '@angular/core';
import Project from '../../types/Project';

@Component({
	selector: 'app-app-icon',
	standalone: true,
	imports: [],
	templateUrl: './app-icon.component.html',
	styleUrl: './app-icon.component.scss',
})
export class AppIconComponent {
	@Input() project!: Project;
}
