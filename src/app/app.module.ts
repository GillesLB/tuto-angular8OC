import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { PostListComponent } from 'src/app/post-list/post-list.component';
import { PostListItemComponent } from 'src/app/post-list-item/post-list-item.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { NewPostComponent } from 'src/app/new-post/new-post.component';
import { PostsArrayService } from 'src/app/services/posts-array.service';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: '', component: PostListComponent },
  { path: '**', component: PostListComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    HeaderComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PostsArrayService,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
