import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Octávio Marques Portfolio';
  version = "1.0.0";

  onClickWhoAmI() {
    document.getElementById("menu-choice")!.style.display = "none";
    document.getElementById("content-pane")!.style.display = "flex";
  }

  onClickEducation() {
    document.getElementById("menu-choice")!.style.display = "none";
    document.getElementById("content-pane")!.style.display = "flex";
  }

  onClickProjects() {
    document.getElementById("menu-choice")!.style.display = "none";
    document.getElementById("content-pane")!.style.display = "flex";
  }

  onClickSkills() {
    document.getElementById("menu-choice")!.style.display = "none";
    document.getElementById("content-pane")!.style.display = "flex";
  }
}