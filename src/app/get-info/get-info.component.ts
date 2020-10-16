import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-get-info',
  templateUrl: './get-info.component.html',
  styleUrls: ['./get-info.component.scss']
})
export class GetInfoComponent implements OnInit {

  @Output() infoClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getInfo(): void {
    const dialogRef = this.dialog.open(InfoMessageComponent, {
      width: '50em'
    })
  }

}
