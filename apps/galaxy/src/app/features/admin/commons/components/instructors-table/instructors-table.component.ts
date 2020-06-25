import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Workshop } from '@galaxy/commons/models';

@Component({
  selector: 'app-instructors-table',
  templateUrl: './instructors-table.component.html',
  styleUrls: ['./instructors-table.component.scss']
})
export class InstructorsTableComponent implements OnInit {
  @Input() displayedColumns: string[] = [ 'instructor', 'mail','edit', 'remove'];
  @Input() dataSource: Workshop[] = [];
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
