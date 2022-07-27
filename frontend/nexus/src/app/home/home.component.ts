import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myimage: string = 'assets/images/homeImage.jpg'
  myphone: string = 'assets/images/phone.png'
  myfiveg: string = 'assets/images/fiveg.png'
  mybar: string = 'assets/images/bar.png'
  constructor() { }

  ngOnInit(): void {
  }

}
