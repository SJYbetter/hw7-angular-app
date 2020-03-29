import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: CourseServiceClient) { }

  modules = [
    {_id: '123', title: 'Module 1'},
    {_id: '234', title: 'Module 2'},
    {_id: '345', title: 'Module 3'},
  ]
  courseId = ''
  moduleId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.service.findModulesForCourse(this.courseId)
        .then(modules => this.modules = modules);
    });
  }

}
