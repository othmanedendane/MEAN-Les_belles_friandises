import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  content = "Les belles friandises"
  bloquer = true;
  constructor() { }

  activons(){


    this.bloquer = false;

  }

  ngOnInit(): void {
  }

}
