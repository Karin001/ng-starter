import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogViewService } from '../../../core/blog/blog-view.service';
const test = [
  {
      "main": {
          "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?",
          "like": [
              "yukarin"
          ],
          "username": [
              "yuki"
          ],
          "userid": "123121",
          "created_on": "2018-10-10T06:01:15.073Z"
      },
      "sub": [
          {
              "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?",
              "like": [
                  "yukarin"
              ],
              "username": [
                  "john"
              ],
              "userid": "123122",
              "created_on": "2018-10-10T06:01:15.073Z"
          },
          {
              "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?",
              "like": [
                  "yukarin"
              ],
              "username": [
                  "smith"
              ],
              "userid": "123123",
              "created_on": "2018-10-10T06:01:15.073Z"
          }
      ]
  },
  {
      "main": {
          "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?",
          "like": [
              "yukarin"
          ],
          "username": [
              "bob"
          ],
          "userid": "123124",
          "created_on": "2018-10-10T06:01:15.073Z"
      },
      "sub": [
          {
              "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?",
              "like": [
                  "yukarin"
              ],
              "username": [
                  "bob"
              ],
              "userid": "123121",
              "created_on": "2018-10-10T06:01:15.073Z"
          },
          {
              "message": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?",
              "like": [
                  "yukarin"
              ],
              "username": [
                  "bob"
              ],
              "userid": "123121",
              "created_on": "2018-10-10T06:01:15.073Z"
          }
      ]
  }
];
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  content;
  id;
  test;
  editMod = false;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogViewService
  ) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.id = id;
      this.blogService.loadBlogContent({ id }).subscribe(resBody => {
        this.content = resBody.payload.content;
        this.test = resBody.payload.comments || [];
      });
    });
  }

  ngOnInit() {

  }
  save() {
    this.blogService.editBlogContent({id: this.id, content: this.content}).subscribe(res => {
      console.log(res);

    });
  }
}
