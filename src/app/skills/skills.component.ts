import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  /*
  * Skill List:
  * * label: Text showned on HTML;
  * * imgURL: Path to skill Image;
  */
  skills = [
    {label:"Java", imgURL:"../../assets/images/icon/avaluation_med.png"},
    {label:"Python", imgURL:"../../assets/images/icon/avaluation_low.png"},
    {label:"Javascript", imgURL:"../../assets/images/icon/avaluation_med.png"},
    {label:"C++", imgURL:"../../assets/images/icon/avaluation_starter.png"},
    {label:"PHP", imgURL:"../../assets/images/icon/avaluation_starter.png"},
    {label:"SQL", imgURL:"../../assets/images/icon/avaluation_med.png"},
    {label:"Angular", imgURL:"../../assets/images/icon/avaluation_low.png"},
    {label:"CSS", imgURL:"../../assets/images/icon/avaluation_med.png"}
  ]

  /*
  * Back Button Image path URL:
  */
  backBtnURL = "../../assets/images/icon/go-back-arrow.png";

  constructor() { }

  ngOnInit(): void {
  }

}
