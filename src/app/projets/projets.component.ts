import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from '../shared/services/message.service';
import { VideoPopupComponent } from '../video-popup/video-popup.component';

@Component({
  selector: 'sc-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  constructor(private messageService:MessageService, private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  linkNotAvailable(){
    this.messageService.displayErrorMessage('Lien pas encore disponible');
  }


  displayVideo(){
    this.dialog.open(VideoPopupComponent);
  }

}
