import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  /*
  * Menu Routing Buttons Configurations:
  * * Label: HTML that's showned on button name;
  * * URL: Route on click event;
  */
  menuLinks = [
    {label:"Who Am I", url:"/who-am-i"},
    {label:"Education", url:"/education"},
    {label:"Projects", url:"/projects"},
    {label:"Skills", url:"/skills"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
