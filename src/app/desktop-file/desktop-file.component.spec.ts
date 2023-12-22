import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopFileComponent } from './desktop-file.component';

describe('DesktopFileComponent', () => {
  let component: DesktopFileComponent;
  let fixture: ComponentFixture<DesktopFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesktopFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
