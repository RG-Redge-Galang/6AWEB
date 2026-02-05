import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/services" routerLinkActive="active">Services</a>
      <a routerLink="/contact" routerLinkActive="active">Contact</a>
    </nav>
  `,
  styles: [`
    nav { display:flex; gap:16px; background:#222; padding:10px }
    a { color:white; text-decoration:none }
    a.active { border-bottom:2px solid gold }
  `]
})
export class NavbarComponent {}
