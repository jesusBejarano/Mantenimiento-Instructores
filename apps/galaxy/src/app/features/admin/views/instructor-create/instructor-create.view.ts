import { Component, OnInit } from '@angular/core';
import { InstructorCreatePresenter } from './Instructor-create.presenter';

@Component({
  selector: 'app-instructor-create',
  templateUrl: './instructor-create.view.html',
  styleUrls: ['./instructor-create.view.scss'],
  providers: [ InstructorCreatePresenter ]
})
export class InstructorCreateView implements OnInit {

  constructor(public presenter: InstructorCreatePresenter) {}

  ngOnInit(): void {
  }

}
