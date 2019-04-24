import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FremeComponent } from './freme.component';

describe('FremeComponent', () => {
  let component: FremeComponent;
  let fixture: ComponentFixture<FremeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FremeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
