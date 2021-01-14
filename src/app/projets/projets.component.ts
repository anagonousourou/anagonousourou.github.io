import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'sc-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
  }

  linkNotAvailable(){
    this.messageService.displayErrorMessage('Lien pas encore disponible');
  }

}
