import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import * as firebase from 'firebase';

import { Post } from 'src/app/post';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsArrayService {

  posts: Post[] = [];
  loveIts: number;

  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  color(loveIts) {
    if (loveIts > 0) {
      return 'green';
    } else if (loveIts < 0) {
      return 'red';
    }
  }

  moinsUn(loveIts) {
    this.loveIts = loveIts;
  }

  plusUn(loveIts) {
    this.loveIts = loveIts;
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  deletePost(post: Post) {
    const postIndexToDelete = this.posts.findIndex(
      (postToDelete) => {
        if (postToDelete === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToDelete, 1);
    this.savePosts();
    this.emitPosts();
  }

}
