import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFalseQuestionsComponent } from './true-false-questions.component';

describe('TrueFalseQuestionsComponent', () => {
  let component: TrueFalseQuestionsComponent;
  let fixture: ComponentFixture<TrueFalseQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueFalseQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueFalseQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
