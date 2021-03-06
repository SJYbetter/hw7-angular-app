import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''}
  grading = false
  grade = () => { this.grading = true }
  ngOnInit(): void {
  }

}
