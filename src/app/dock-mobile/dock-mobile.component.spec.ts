import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockMobileComponent } from './dock-mobile.component';

describe('DockMobileComponent', () => {
  let component: DockMobileComponent;
  let fixture: ComponentFixture<DockMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DockMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DockMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
