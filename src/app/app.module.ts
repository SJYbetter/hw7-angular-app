import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FormsModule} from '@angular/forms';
import { CourseServiceClient} from './services/CourseServiceClient';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { HomeComponent } from './home/home.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { CourseLisComponent } from './course-lis/course-lis.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizComponent} from './quiz/quiz.component';
import { MultipleChoiceQuestionComponent} from './multi-questions/multi-questions.component';
import { TrueFalseQuestionComponent} from './true-false-questions/true-false-questions.component';
import {QuestionServiceClient} from './services/QuestionServiceClient';
import {QuizServiceClient} from './services/QuizServiceClient';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponent,
    HomeComponent,
    ModuleListComponent,
    LessonTabsComponent,
    CourseLisComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseServiceClient,
    QuizServiceClient,
    QuestionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
