import { Component, OnInit, ViewChild } from '@angular/core';
import { PageService } from './page.service';
import { UtilsService } from '../utils.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogSpinnerComponent } from '../dialog-spinner/dialog-spinner.component';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';

export interface PeriodicElement {
  encoded: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {encoded: 'Hggggg'},
];

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  inputTextModel="";
  doShow = false;
  displayedColumns: string[] = ['encoded'];

  dataSource = ELEMENT_DATA;

  constructor(
    private pageService: PageService,
    private utilsService: UtilsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.pageService.closeDialog().subscribe(res=>{
      console.log(res);
    })
  }

  addStr(){
    this.openDialogSpinner();
    this.pageService.addCharacter(this.inputTextModel).subscribe(res=>{
      console.log(res.results);
      this.dataSource = res.results;

      this.pageService.setDialogValue(true);
    }, err=>{
      console.log(err);
      this.pageService.setDialogValue(true);
    })
  }

  public openDialogSpinner() {
    this.dialog.open(DialogSpinnerComponent, {
      disableClose: true
    });
  }

  
}

