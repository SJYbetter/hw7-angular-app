import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: CourseServiceClient) {
  }

  newCourseTitle = '';
  courses = [
    {_id: '123', title: 'Course A'},
    {_id: '234', title: 'Course B'},
    {_id: '345', title: 'Course C'},
    {_id: '456', title: 'Course D'}
  ];

  deleteCourse = (deletedCourse) =>
    this.courses = this.courses.filter(course => course !== deletedCourse);

  createCourse = (title) =>
    this.courses.push({_id: '321', title});

  courseId = ''

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.service.findAllCourses()
        .then(courses => this.courses = courses);
    });

  }
}