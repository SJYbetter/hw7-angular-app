import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiQuestionsComponent } from './multi-questions.component';

describe('MultiQuestionsComponent', () => {
  let component: MultiQuestionsComponent;
  let fixture: ComponentFixture<MultiQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
