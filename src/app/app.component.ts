import { Component } from '@angular/core';
import { ThemeChangeService } from './core/ui/themeChange.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-stater';
  theme='light-theme'
  constructor(
    public themeChangeService:ThemeChangeService,
    private overlayContainer: OverlayContainer
  ) {
    this.themeChangeService.toggleTheme$.subscribe(()=>{
      const originalTheme = this.theme
      if(originalTheme === 'light-theme') {
        this.theme = 'dark-theme'
      } else {
        this.theme = 'light-theme'
      }
      this.overlayContainer.getContainerElement().classList.remove(originalTheme);
      this.overlayContainer.getContainerElement().classList.add(this.theme);
    })
   }
}
