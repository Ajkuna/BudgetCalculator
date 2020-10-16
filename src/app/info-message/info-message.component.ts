import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-message',
  templateUrl: './info-message.component.html',
  styleUrls: ['./info-message.component.scss']
})
export class InfoMessageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InfoMessageComponent>) { }

  ngOnInit(): void {
  }

  closeButton(): void {
    this.dialogRef.close();
  }

}
