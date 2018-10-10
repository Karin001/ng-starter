import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogViewService } from '../../../core/blog/blog-view.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  content;
  constructor(
    private route :ActivatedRoute,
    private blogService: BlogViewService
  ) {
    this.route.paramMap.subscribe(params=>{
      const id = params.get('id');
      this.blogService.loadBlogContent({id}).subscribe(resBody => {
        this.content = resBody.payload.content;
        console.log(this.content)
      })
    })
   }

  ngOnInit() {
  }

}
