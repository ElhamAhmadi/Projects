import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  pass: string = '';
  repass: string = '';
  ismach: boolean = false;
  colorr: string = 'black';
  allowbtn: boolean = false;
  welcome: boolean = false;
  
 
  public changeUserName(e: Event) {
        this.username = (<HTMLInputElement>e.target).value;
  }
  public changeWelcome(e: Event) {
    this.welcome= true;
    
  }
  public changecolor() {
    this.colorr= 'green';
    
  }
  public changePassword(e: Event) {
    this.pass = (<HTMLInputElement>e.target).value;
  }
  
  public changeRepassword(e: Event) {
    this.repass = (<HTMLInputElement>e.target).value;
    this.ismach = this.pass !== this.repass ? false : true;
  }

  constructor() {
    setTimeout(() => {
      this.allowbtn = true;
    }, 2000);

  }


}