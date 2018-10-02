import { Component, OnInit } from '@angular/core';
import { EditorInstance } from 'angular-markdown-editor';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {
  markdownText;
  bsEditorInstance: EditorInstance;
  editorOptions: { iconlibrary: string; onShow: (e: any) => any; };
  constructor(

  ) { }

  ngOnInit() {
    this.editorOptions = {
      iconlibrary: 'fa',
      onShow: (e) => this.bsEditorInstance = e
    };

  }
  showFullScreen() {
    console.log(this.bsEditorInstance.getContent());
  }

}
