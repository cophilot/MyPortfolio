import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWindowComponent } from './text-window.component';

describe('TextWindowComponent', () => {
	let component: TextWindowComponent;
	let fixture: ComponentFixture<TextWindowComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TextWindowComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(TextWindowComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
