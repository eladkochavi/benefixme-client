import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitResultListComponent } from './benefit-result-list.component';

describe('BenefitResultListComponent', () => {
  let component: BenefitResultListComponent;
  let fixture: ComponentFixture<BenefitResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
