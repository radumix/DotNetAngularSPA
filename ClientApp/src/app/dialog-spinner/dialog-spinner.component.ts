import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PageService } from '../page/page.service';
import { PeriodicElement } from '../page/page.component';

@Component({
  selector: 'app-dialog-spinner',
  templateUrl: './dialog-spinner.component.html',
  styleUrls: ['./dialog-spinner.component.css']
})
export class DialogSpinnerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogSpinnerComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement,
    private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.closeDialog().subscribe(trig => {
      this.dialogRef.close();
    });
  }

  cancel(){
    this.pageService.setDialogValue(false);
    this.dialogRef.close();
  }

}
