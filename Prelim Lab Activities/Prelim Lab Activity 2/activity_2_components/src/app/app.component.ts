import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SkillsComponent } from "./skills/skills.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";
import { ProfileComponent } from "./profile/profile.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SkillsComponent, FooterComponent, ContactComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'activity_2_components';
}
