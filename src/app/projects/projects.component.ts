import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  /*
  * Project List:
  * * title: Is where the title label will be shown on the website;
  * * url: The project page so user can be redirected to;
  * * textList: Array of texts;
  * * * You can put how many you want using the following example;
  */
  projectsList = [
    {
      title:"The Power of Touch, Technologies", url:"https://www.pwtouch.com/", 
      textList:[
        {text:"PoTT is the leading company for the M-SMART project, a Biometric Security Technology R&D initiative developed at Madeira Living Lab."},
        {text:"Supported by a consortium between the regional ICT industry, Tactilis and the University of Madeira, a broad set of e-ID, payment, authentication, secure archiving and biometric signature applications and solutions are under research and development."},
        {text:"Through an agreement signed with the Regional Government of Madeira, 25 multi-sector demonstration pilots have been identified to be developed for 10 different entities."}
      ]
    }
  ]

  /*
  * Back Button Image path URL:
  */
  backBtnURL = "../../assets/images/icon/go-back-arrow.png";
  constructor() { }

  ngOnInit(): void {
  }

}
