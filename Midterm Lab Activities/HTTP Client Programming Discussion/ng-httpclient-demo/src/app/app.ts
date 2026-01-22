import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { User } from './user.model';
import { Post } from './post.model';
import { PostService } from './post';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('ng-httpclient-demo');

  httpusers: User[] = [];
  posts: Post[] = [];

  constructor(
    private httpClient: Httpclient,
    private postService: PostService
  ) {}

  ngOnInit() {

    this.httpClient.getUsersRemotely().subscribe(data => {
      this.httpusers = data.slice(0, 6);
    });


    this.postService.getPosts().subscribe(data => {
      this.posts = data.slice(0, 5);
    });
  }
}
