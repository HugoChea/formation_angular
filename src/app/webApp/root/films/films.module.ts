import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeDesFilesComponent } from './liste-des-files/liste-des-files.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListeDesFilesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    ListeDesFilesComponent,
  ]
})
export class FilmsModule { }
