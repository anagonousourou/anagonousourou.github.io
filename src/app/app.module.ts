import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { FormationComponent } from './formation/formation.component';
import { HeaderComponent } from './header/header.component';
import { ProjetsComponent } from './projets/projets.component';
import { VideoPopupComponent } from './video-popup/video-popup.component';
import { WhoamiComponent } from './whoami/whoami.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhoamiComponent,
    FormationComponent,
    ExperienceComponent,
    ProjetsComponent,
    FooterComponent,
    VideoPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule, MatSnackBarModule,MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
