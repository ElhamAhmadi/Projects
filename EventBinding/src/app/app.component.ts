import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  serverElements: any = [];
  newFoodName: string = '';
  newFoodContnt: string = '';
  

  onAddIrani(e: Event) {
    this.serverElements.push( {type:'iran', namee: this.newFoodName, content: this.newFoodContnt } );
  }


  onAddGermany(e: Event) {
    this.serverElements.push( {type:'germany', namee: this.newFoodName,content: this.newFoodContnt} );
  }

}