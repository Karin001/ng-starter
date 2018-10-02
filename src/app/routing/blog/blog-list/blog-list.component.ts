import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { BlogViewService } from '../../../core/blog/blog-view.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  index;

  bloglist = [];
  placeholders = [];
  pageSize = 10;
  pageToLoadNext = 1;
  loading = false;
  loadAll = false;
  constructor(
    private blogService: BlogViewService,
    public activatedRoute: ActivatedRoute
  ) {
   this.activatedRoute.paramMap.subscribe(params => {
      this.index = params.get('index')
    });

  }

  // loadNext() {
  //   if (this.loading) { return }

  //   this.loading = true;
  //   this.placeholders = new Array(this.pageSize);
  //   this.blogService.loadBlogList(
  //     {
  //       pageToLoadNext: this.pageToLoadNext,
  //       pageSize:this.pageSize,
  //       index:this.index
  //     }
  //   )
  //     .subscribe(({ list, loadAll }) => {
  //       this.placeholders = [];
  //       this.bloglist.push(...list);
  //       this.loading = false;
  //       this.loadAll = loadAll;
  //       this.pageToLoadNext++;
  //     });
  // }
  ngOnInit() {
  }

}
