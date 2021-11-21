import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  isShown: boolean = true ;
  constructor(public router:Router) { }

  toggleShow() {

    this.isShown = ! this.isShown;
    
    }

    dashboard(){
      this.router.navigateByUrl('dashboard')
    }
    classes(){
      this.router.navigateByUrl('classes')
    }
    resources(){
      this.router.navigateByUrl('resources')
    }
    learning(){
      this.router.navigateByUrl('learning')
    }
    chat(){
      this.router.navigateByUrl('chat')
    }
    setting(){
      this.router.navigateByUrl('setting')
    }
  
  ngOnInit(): void {
    
  }

}
