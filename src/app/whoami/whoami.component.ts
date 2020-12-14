import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html',
  styleUrls: ['./whoami.component.css']
})
export class WhoamiComponent implements OnInit {

  /*
  * Profile Information:
  */ 
  name: string = "Octávio Marques";
  location: string = "Madeira Island - Funchal";
  age: number = 24;
  work_location_name: string = "XIS Group";
  work_location_url: string = "https://www.xis-group.com/";

  /*
  * Logo Images Path:
  */
  profile_img_path: string = "../../assets/images/icon/profile.png";
  location_logo_path: string = "../../assets/images/icon/location.png";
  age_logo_path: string = "../../assets/images/icon/age.png";
  work_logo_path: string = "../../assets/images/icon/work.png";

  /*
  * Back Button Image path URL:
  */
  backBtnURL = "../../assets/images/icon/go-back-arrow.png";

  constructor() { }

  ngOnInit(): void {
  }

}
