import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  /*
  * Education List:
  * * Title: Education Location Title;
  * * textList: An array with the text about the place;
  */
  educationList = [
    {
      title:"Basic and Secondary School of Santa Cruz",
      textList:[
        {text:"School located on Madeira Island, in the municipality of Santa Cruz, it was in this small secondary school that I acquired the Computer Operator Course and the Computer Equipment Management Course. They gave equivalence to the 12th."},
        {text:"Computer Operator: Prepare young people for professional performance as Computer Operator so that, independently and according to technical guidelines, they proceed with the installation and configuration of office software, local networks, Internet and other computer applications, as well as perform the maintenance of microcomputers, peripherals and local networks."},
        {text:"The computer equipment management technician also has a solid background in programming languages ​​related to his professional profile."}
      ]
    },
    {
      title:"University of Madeira",
      textList:[
        {text:"Main University of the Island of Madeira, at the same time I concluded the professional higher technical course in Technologies and Programming of Information System."},
        {text:"The professional superior technician in Information Systems Technologies and Programming will be able, independently or integrated into a team, to plan, implement and maintain application software oriented to the web, distributed or mobile context, as well as to design and optimize Systems Information in diverse contexts, with the capacity to adapt to emerging technologies."},
        {text:"The Professional Superior Technician in Technologies and Programming of Information Systems prepares superior technicians with a professional profile of level V, giving competences in the planning, implementation and maintenance of Information Systems."}
      ]
    }
  ];

  /*
  * Back Button Image path URL:
  */
  backBtnURL = "../../assets/images/icon/go-back-arrow.png";

  constructor() { }

  ngOnInit(): void {
  }

}
