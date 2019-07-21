import { TestBed } from '@angular/core/testing';

import { PostsArrayService } from './posts-array.service';

describe('PostsArrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsArrayService = TestBed.get(PostsArrayService);
    expect(service).toBeTruthy();
  });
});
