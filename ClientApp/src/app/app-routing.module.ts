import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'load',
    loadChildren: async () => (await import('./page/page.module')).PageModule,
  },
 
  { path: '', redirectTo: 'load', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
