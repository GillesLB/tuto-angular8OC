import { Component, OnInit, OnDestroy } from '@angular/core';

import { PostsArrayService } from 'src/app/services/posts-array.service';
import { Post } from 'src/app/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts;

  postsSubscription: Subscription;

  constructor(
    private postsArrayService: PostsArrayService
  ) { }

  ngOnInit() {
    this.postsSubscription = this.postsArrayService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsArrayService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }


}
