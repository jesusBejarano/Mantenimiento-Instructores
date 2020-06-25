import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { InstructorRequest, Instructor } from '@galaxy/commons/models';
import { Router } from '@angular/router';



@Component({
  selector: 'app-instructor-form',
  templateUrl: './instructor-form.component.html',
  styleUrls: ['./instructor-form.component.scss']
})
export class InstructorFormComponent implements OnInit, OnChanges {
  @Input() instructor: Instructor;
  @Output() save: EventEmitter<InstructorRequest> = new EventEmitter<InstructorRequest>();
  @Output() close: EventEmitter<InstructorRequest> = new EventEmitter<InstructorRequest>();
  form: FormGroup;
  router:Router;

  get nameField() {
    return this.form.get('fullName') as FormControl;
  }

  get nameErrors() {
    if (this.nameField.hasError('required')) {
      return 'Este campo es requerido';
    }

    return '';
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      mail: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.instructor?.currentValue) {
      this.updateFormValues(changes.instructor.currentValue);
    }
  }

  updateFormValues(instructor: Instructor) {
    this.form.patchValue({
      fullName: instructor.fullName,
      mail: instructor.mail
    });
  }

  send() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }
  goInstructors() {
    this.close.emit(this.form.value);
  }

}
