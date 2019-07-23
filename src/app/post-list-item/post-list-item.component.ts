import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { PostsArrayService } from 'src/app/services/posts-array.service';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit, OnDestroy {

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
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

  onColor(loveIts) {
    this.postsArrayService.color(loveIts);
  }

  onPlusUn() {
    this.loveIts += 1;
    this.postsArrayService.plusUn(this.loveIts);
  }

  onMoinsUn() {
    this.loveIts -= 1;
    this.postsArrayService.moinsUn(this.loveIts);
  }

  onDeletePost(post: Post) {
    this.postsArrayService.deletePost(post);
  }

}
