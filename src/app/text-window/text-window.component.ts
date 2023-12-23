import { Component, Input } from '@angular/core';
import { WindowComponent } from '../window/window.component';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-text-window',
	standalone: true,
	imports: [WindowComponent, FormsModule],
	templateUrl: './text-window.component.html',
	styleUrl: './text-window.component.scss',
})
export class TextWindowComponent {
	@Input() text = '';
	@Input() name = '';
	@Input() id = -1;
	@Input() level = 10;
}
