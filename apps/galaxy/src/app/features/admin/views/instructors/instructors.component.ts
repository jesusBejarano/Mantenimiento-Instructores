import { Component, OnInit } from '@angular/core';
import { InstructorsPresenter } from './instructors.presenter';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss'],
  providers:[InstructorsPresenter]
})
export class InstructorsComponent implements OnInit {

  constructor(public presenter:InstructorsPresenter) { }

  ngOnInit(): void {
    this.presenter.loadInstructors();
  }

}
