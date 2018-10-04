import { Directive, HostListener, ViewContainerRef, Input, ComponentRef, ComponentFactoryResolver, HostBinding, Renderer2 } from '@angular/core';


import { YkContextMenuComponent } from '../yk-context-menu.component';
@Directive({
  selector: '[appYkContextMenu]',
})
export class YkContextMenuDirective {
  component: ComponentRef<YkContextMenuComponent>;
  @Input('appYkContextMenu') appYkContextMenu;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewcontainerRef: ViewContainerRef,
    private rd2: Renderer2
  ) {
    window.document.body.addEventListener('click', () => {
      this.closeMenu();
    })
  }
  @HostListener('click', ['$event'])
  openMenu(event) {
    event.stopPropagation();
    if (this.component) {
      this.component.destroy();
      this.component = null;
      return;
    }
    const componetFactory = this.componentFactoryResolver.resolveComponentFactory(YkContextMenuComponent);
    this.component = this.viewcontainerRef.createComponent(componetFactory);
    const location = { top: event.clientY + 'px', right: document.body.offsetWidth - event.clientX + 'px' };
    console.log(location);

    this.component.instance.location = location;
    this.component.instance.items = this.appYkContextMenu;


  }
  closeMenu() {
    if (this.component) {
      this.component.destroy();
      this.component = null;
    }
  }
}
