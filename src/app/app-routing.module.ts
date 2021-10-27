import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './webApp/root/accueil/body/body.component';
import { ListeDesFilesComponent } from './webApp/root/films/liste-des-files/liste-des-files.component';

const routes: Routes = [
  {path:'', component:BodyComponent},
  {path:'accueil', component:BodyComponent},
  {path:'liste-des-films', component:ListeDesFilesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
