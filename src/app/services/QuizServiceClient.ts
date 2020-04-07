import {Injectable} from '@angular/core';
@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('http://pure-mesa-39023.herokuapp.com/api/quizzes')
      .then(response => response.json())
  
  findQuizById = (qid) =>
    fetch(`http://pure-mesa-39023.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())
}
