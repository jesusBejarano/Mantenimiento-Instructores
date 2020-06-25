import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-modal',
  templateUrl: './dialog-delete-modal.component.html',
  styleUrls: ['./dialog-delete-modal.component.scss']
})
export class DialogDeleteModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDeleteModalComponent>) { }

  ngOnInit(): void {
  }

  close(remove = false) {
    this.dialogRef.close(remove);
  }

}
