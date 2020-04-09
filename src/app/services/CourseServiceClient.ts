import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findCourseById = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001821034/${courseId}`)
      .then(response => response.json());

  findAllCourses = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/001821034/courses')
      .then(response => response.json());

  findModulesForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001821034/courses/${courseId}/modules`)
      .then(response => response.json());

  findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001821034/modules/${moduleId}/lessons`)
      .then(response => response.json());
}
