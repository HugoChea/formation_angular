import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FilmsModule } from '../films/films.module';



@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FilmsModule
  ],
  exports:[
    LandingPageComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ]
})
export class AccueilModule { }
