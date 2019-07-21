import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Post } from 'src/app/post';
import { PostsArrayService } from 'src/app/services/posts-array.service';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  newPostForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postsArrayService: PostsArrayService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newPostForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]/)]],
      content: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]/)]],
      loveIts: 0,
      createdAt: Date()
    });
  }

  onSubmit() {
    const title = this.newPostForm.get('title').value;
    const content = this.newPostForm.get('content').value;
    const loveIts = 0;
    const createdAt = Date();
    const newPost = new Post(title, content, loveIts, createdAt);

    this.postsArrayService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
