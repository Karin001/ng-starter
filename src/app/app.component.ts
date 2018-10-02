import { Component } from '@angular/core';

import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-stater';
  theme = 'light-theme'
  constructor(

    private overlayContainer: OverlayContainer
  ) {


  }
}

