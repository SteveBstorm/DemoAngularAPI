import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-confirmbox',
  templateUrl: './confirmbox.component.html',
  styleUrls: ['./confirmbox.component.scss']
})
export class ConfirmboxComponent implements OnInit {

  @Input() name : string;

  constructor(private dialogRef: NbDialogRef<ConfirmboxComponent>) { }

  ngOnInit(): void {
  }

  yes() {
    this.dialogRef.close(true);
  }
  no() {
    this.dialogRef.close(false);
  }

}