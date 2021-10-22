import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listPosts: any[] = [];

  constructor(public _postService: PostService) { }

  ngOnInit(): void {
    this.getListPost();
  }

  getListPost() {
    this._postService.getPost()
    .subscribe((response) => {
      this.listPosts = response.data;
      console.log('listPosts', this.listPosts);
    }, (error) => {
      console.log('error', error)
    });
  }

}
