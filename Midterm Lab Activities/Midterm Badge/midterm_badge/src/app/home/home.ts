import { Component, inject } from '@angular/core';
import { AsyncPipe, UpperCasePipe, SlicePipe } from '@angular/common';
import { DataService } from '../data-service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, UpperCasePipe, SlicePipe],
  template: `
    <h1>Welcome to the Community Help Desk!</h1>

    <h2>Most Recent Updates</h2>

    <ul>
      @for (post of latestPosts$ | async; track post.id) {
        <li>
          <h3>{{ post.title | uppercase }}</h3>
          <p>{{ post.body | slice:0:100 }}...</p>
        </li>
      }
    </ul>
  `
})
export class HomeComponent {
  private data = inject(DataService);

  latestPosts$ = this.data.posts$.pipe(
    map(posts => posts.slice(0, 5))
  );
}
