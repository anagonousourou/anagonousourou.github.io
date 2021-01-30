import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { WhoamiComponent } from './whoami/whoami.component';
import { FormationComponent } from './formation/formation.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjetsComponent } from './projets/projets.component';
import { FooterComponent } from './footer/footer.component'; 
import { MessageService } from './shared/services/message.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { VideoPopupComponent } from './video-popup/video-popup.component';
import {MatDialogModule} from '@angular/material/dialog'; 
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
    BrowserAnimationsModule,MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
