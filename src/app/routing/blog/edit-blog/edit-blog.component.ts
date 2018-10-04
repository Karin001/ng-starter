import { Component, OnInit, TemplateRef} from '@angular/core';
import { EditorInstance } from 'angular-markdown-editor';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { UploadBlogService, UploadBlogReqBodyModel } from '../../../core/blog/upload-blog-service';
import { animteType1 } from '../../../animations'
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss'],
  animations: [animteType1]
})
export class EditBlogComponent implements OnInit {
  [x: string]: any;
  ninjiastate;
  form = {
    filename: null,
    content: null,
    dir: null,
    description: null
  };
  bsEditorInstance: EditorInstance;
  editorOptions: { iconlibrary: string; onShow: (e: any) => any; };
  constructor(
    private dialogService: NbDialogService,
    private upLoadBlogService: UploadBlogService
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
  upLoad(dialog: TemplateRef<any>) {

    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }
  confim() {
    console.log(this.bsEditorInstance.getContent());
    const reqBody: UploadBlogReqBodyModel = {
      ...this.form,
    };
    console.log(reqBody.content);
    this.upLoadBlogService.uploadBlog(reqBody).subscribe(resBody => {
      console.log(resBody);
    });

  }

}
