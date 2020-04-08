import {Injectable} from '@angular/core';
@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://pure-mesa-39023.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
