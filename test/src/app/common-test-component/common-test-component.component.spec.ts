import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTestComponentComponent } from './common-test-component.component';

describe('CommonTestComponentComponent', () => {
  let component: CommonTestComponentComponent;
  let fixture: ComponentFixture<CommonTestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonTestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
