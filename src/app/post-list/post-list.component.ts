import { Component, OnInit } from '@angular/core';

import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts;

  constructor(
    private app: AppComponent
  ) { }

  ngOnInit() {
    this.posts = this.app.posts;
  }

}
