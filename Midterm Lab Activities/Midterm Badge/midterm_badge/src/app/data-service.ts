import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private http = inject(HttpClient);

  posts$: Observable<Post[]> = this.http
    .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(shareReplay(1));
}
