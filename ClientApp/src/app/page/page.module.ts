import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { MaterialModule } from 'src/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogSpinnerComponent } from '../dialog-spinner/dialog-spinner.component';


@NgModule({
  declarations: [
    PageComponent,
    DialogSpinnerComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],

})
export class PageModule { }
