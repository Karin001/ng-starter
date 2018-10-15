import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-stater';
  theme = 'light-theme';
  routerAnimationState = 'active1';

  pvuvOption = {
    apiUrl: '/api/util/PvUv',
    name: 'home-page',
    searchId: ''
  };
  constructor(

  ) {

  }

}
