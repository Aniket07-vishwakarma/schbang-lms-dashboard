import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrderPageComponent } from './all-order-page.component';

describe('AllOrderPageComponent', () => {
  let component: AllOrderPageComponent;
  let fixture: ComponentFixture<AllOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
