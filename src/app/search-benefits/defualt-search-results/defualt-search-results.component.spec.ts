import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefualtSearchResultsComponent } from './defualt-search-results.component';

describe('DefualtSearchResultsComponent', () => {
  let component: DefualtSearchResultsComponent;
  let fixture: ComponentFixture<DefualtSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefualtSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefualtSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
