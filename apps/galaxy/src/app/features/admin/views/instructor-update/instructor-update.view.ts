import { Component, OnInit } from '@angular/core';
import { InstructorUpdatePresenter } from './instructor-update.presenter';

@Component({
  selector: 'app-instructor-update',
  templateUrl: './instructor-update.view.html',
  styleUrls: ['./instructor-update.view.scss'],
  providers: [ InstructorUpdatePresenter ]
})
export class InstructorUpdateView implements OnInit {

  constructor(public presenter: InstructorUpdatePresenter) { }

  ngOnInit(): void {
    this.presenter.initial();
  }

}
