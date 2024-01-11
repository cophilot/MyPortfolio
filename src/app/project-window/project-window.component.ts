import { Component, Input } from '@angular/core';
import { WindowComponent } from '../window/window.component';
import { FormsModule } from '@angular/forms';
import Project from '../../types/Project';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownService } from 'ngx-markdown';

@Component({
	selector: 'app-project-window',
	standalone: true,
	imports: [WindowComponent, FormsModule, MarkdownModule],
	templateUrl: './project-window.component.html',
	styleUrl: './project-window.component.scss',
})
export class ProjectWindowComponent {
	@Input() id = -1;
	@Input() level = 10;
	@Input() project!: Project;
	markdown = '';

	constructor(private mdService: MarkdownService) {
		console.log(this.project);
	}

	ngOnInit(): void {
		const readmeURL = `https://raw.githubusercontent.com/cophilot/${this.project.name}/${this.project.branch}/README.md`;

		this.mdService.renderer.link = (
			href: string,
			title: string,
			text: string
		) => {
			if (href.startsWith('#')) {
				href = `https://github.com/cophilot/${this.project.name + href}`;
			}
			return `<a href="${href}" target="_blank" title="${title}">${text}</a>`;
		};

		this.mdService.renderer.image = (
			href: string,
			title: string,
			text: string
		) => {
			if (!href.startsWith('http')) {
				href = `https://raw.githubusercontent.com/cophilot/${this.project.name}/${this.project.branch}/${href}`;
			}
			// remove unsafe: from the url
			href = href.replace('unsafe:', '');
			return `<img src="${href}" alt="${text}"/>`;
		};

		this.mdService.renderer.html = (html: string) => {
			let lines = html.split('\n');
			let result = '';
			for (let line of lines) {
				if (!line.startsWith('<img')) {
					result += line + '\n';
					continue;
				}
				// get the src attribute
				console.log(line);

				let srcOg = line.split('src="')[1].split('"')[0];
				let srcNew = srcOg;
				if (!srcNew.startsWith('http')) {
					srcNew = `https://raw.githubusercontent.com/cophilot/${this.project.name}/${this.project.branch}/${srcOg}`;
				}
				line = line.replace(srcOg, srcNew);
				result += line + '\n';
			}
			return result;
		};

		// get the readme from the repo
		fetch(readmeURL).then((response) => {
			response.text().then((text) => {
				this.markdown = `
        ---
        ${text}
        `;
			});
		});
	}
}
