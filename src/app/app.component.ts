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
    document.getElementById("container")!.style.display = "none";
  }

  onClickEducation() {
    document.getElementById("container")!.style.display = "none";
  }

  onClickProjects() {
    document.getElementById("container")!.style.display = "none";
  }

  onClickSkills() {
    document.getElementById("container")!.style.display = "none";
  }
}