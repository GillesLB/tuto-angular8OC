import { Component, OnInit, Input } from '@angular/core';

import { PostsArrayService } from 'src/app/services/posts-array.service';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  posts: Post[];
  postsSubscription: Subscription;

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;

  constructor(
    private postsArrayService: PostsArrayService,
  ) { }

  ngOnInit() {
    this.postsSubscription = this.postsArrayService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    // this.postsArrayService.emitBooks();
  }

  onColor() {
    if (this.loveIts > 0) {
      return 'green';
    } else if (this.loveIts < 0) {
      return 'red';
    }
  }

  plusUn() {
    this.loveIts += 1;
  }

  moinsUn() {
    this.loveIts -= 1;
  }

  deletePost(post: Post) {
    this.postsArrayService.deletePost(post);
  }

}
