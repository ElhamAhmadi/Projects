import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   username: string ='' ;
  pass: string ='';
  repass: string ='';
  ismach: boolean = false;

public changeUserName(e: Event){
    this.username =(<HTMLInputElement>e.target).value;

}
public changePassword(e: Event){
    this.pass =(<HTMLInputElement>e.target).value;
   }

public changeRepassword(e: Event){
  this.repass =(<HTMLInputElement>e.target).value; 
  this.ismach = this.pass!== this.repass ? false: true;

       }

}