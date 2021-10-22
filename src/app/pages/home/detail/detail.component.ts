import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailPost: any;

  commentPosts: any[];

  inputComment: string;

  curentPage: number;

  lastPage: number;

  constructor(public _postService: PostService,
              private _activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getDetailCommentPost();
  }

  getDetailCommentPost() {
    this._activatedRoute.queryParams.subscribe((params: Params) => {
      console.log('paramsID', params['id'])
      this._postService.getDetailPost(params['id'])
          .subscribe((response) => {
            this.detailPost = response;
            console.log('detailPost', this.detailPost);
      }, (error) => {
        console.log('error', error)
      });

      this._postService.getCommentPost(params['id'], params['page'])
          .subscribe((response) => {
            console.log('commentPosts', response);
            this.commentPosts = response.data;
            this.curentPage = response.current_page;
            this.lastPage = response.last_page;
      }, (error) => {
        console.log('error', error)
      });
    })
    // this._postService.getDetailPost(id)
    // .subscribe((response) => {
    //   this.detailPost = response.data;
    //   console.log('listPosts', this.detailPost);
    // }, (error) => {
    //   console.log('error', error)
    // });
  }

  sendComment() {
    this._activatedRoute.queryParams.subscribe((params: Params) => {
      this._postService.addCommentPost(params['id'], this.inputComment)
          .subscribe((response) => {
            console.log('commentPosts', response);
            this.commentPosts = response.data;
      }, (error) => {
        console.log('error', error)
      });

    })
  }

  navigateComment(arrow) {
    if (arrow == 'b') {
      if (this.curentPage == 1) {
        return;
      }
      this._activatedRoute.queryParams.subscribe((params: Params) => {
        this._postService.getCommentPost(params['id'], this.curentPage-=1)
            .subscribe((response) => {
              console.log('commentPosts', response);
              this.commentPosts = response.data;
              this.curentPage = response.current_page;
        }, (error) => {
          console.log('error', error)
        });
      })
    } else if (arrow == 'n') {
      if (this.curentPage == this.lastPage) {
        return;
      }
      this._activatedRoute.queryParams.subscribe((params: Params) => {
        this._postService.getCommentPost(params['id'], this.curentPage+=1)
            .subscribe((response) => {
              console.log('commentPosts', response);
              this.commentPosts = response.data;
              this.curentPage = response.current_page;
        }, (error) => {
          console.log('error', error)
        });
      })
    }
  }

}
