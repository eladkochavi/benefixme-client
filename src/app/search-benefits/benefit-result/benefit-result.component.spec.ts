import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitResultComponent } from './benefit-result.component';

describe('BenefitResultComponent', () => {
  let component: BenefitResultComponent;
  let fixture: ComponentFixture<BenefitResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
