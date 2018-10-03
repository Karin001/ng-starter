import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogViewService, BlogViewResBodyModel } from '../../../core/blog/blog-view.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

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
  bloglist$;
  constructor(
    private blogService: BlogViewService,
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.pipe(
      tap(() => { console.log(1); }),
      switchMap(params => this.blogService.loadBlogList({ dir: params.get('index') })),
      map(response => response.payload)
    ).subscribe(val => this.bloglist = val );
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
