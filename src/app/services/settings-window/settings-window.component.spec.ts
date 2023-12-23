import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsWindowComponent } from './settings-window.component';

describe('SettingsWindowComponent', () => {
	let component: SettingsWindowComponent;
	let fixture: ComponentFixture<SettingsWindowComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SettingsWindowComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SettingsWindowComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
