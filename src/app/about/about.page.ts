import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contact={
    name:'Hosni',
    email:'hosnimachfer@hotmail.com',
    photo:'assets/icon/logo.png'
  }

}
