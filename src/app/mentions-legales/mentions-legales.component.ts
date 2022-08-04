import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-mentions-legales',
  templateUrl: './mentions-legales.component.html',
  styleUrls: ['./mentions-legales.component.css']
})
export class MentionsLegalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getHostingService(){
    if(window.location.href.includes('github.io')){
      return 'Github Pages';
    }
    else{
      return  'Digital Ocean';
    }
  }

}
