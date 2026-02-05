import { TruncatePipe } from './../truncate-pipe';
import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { DataService } from '../data-service';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor, AsyncPipe, TruncatePipe],
  template: `
    <h1>Services</h1>

    <input
      placeholder="Search..."
      (input)="search$.next($any($event.target).value)"
    />

    <ul>
      <li *ngFor="let post of filteredPosts$ | async">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body | truncate:120 }}</p>
      </li>
    </ul>
  `
})
export class ServicesComponent {
  private data = inject(DataService);
  search$ = new BehaviorSubject('');

  filteredPosts$ = combineLatest([
    this.data.posts$,
    this.search$
  ]).pipe(
    map(([posts, search]) =>
      posts.filter(p =>
        p.title.includes(search) || p.body.includes(search)
      )
    )
  );
}
