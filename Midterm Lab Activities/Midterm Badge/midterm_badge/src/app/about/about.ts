import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  template: `
    <h1>{{ 'about this portal' | uppercase }}</h1>
        <p>Date: <span class="date">{{ today | date:'full' }}</span></p>
    <div class="intro">
      <p>
        Welcome to the Community Help Desk's About page. This platform is designed to help users
        stay updated about the most recent tickets while maintaining a log of all previous tickets.
      </p>
      <p>
        Our mission is to provide an easy to navigate log of tickets. Through this we hope to help
        all users successfully find information that can help them in a timely manner.
      </p>
    </div>

  `
})
export class AboutComponent {
  today = new Date();
}
