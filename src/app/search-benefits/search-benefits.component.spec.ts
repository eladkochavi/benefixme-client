import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBenefitsComponent } from './search-benefits.component';

describe('SearchBenefitsComponent', () => {
  let component: SearchBenefitsComponent;
  let fixture: ComponentFixture<SearchBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
