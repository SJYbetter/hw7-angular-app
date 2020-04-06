import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLisComponent } from './course-lis.component';

describe('CourseLisComponent', () => {
  let component: CourseLisComponent;
  let fixture: ComponentFixture<CourseLisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
