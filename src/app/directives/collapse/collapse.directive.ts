import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective implements OnInit {

  private buttonRef: HTMLElement;
  private panelREf: HTMLElement;
  private containerREf: HTMLElement;

  private opened = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') private onCLick(){
    this.opened ? this.close() : this.open();
  }


  ngOnInit() {
    this.containerREf = this.el.nativeElement;
    this.buttonRef = this.containerREf.firstElementChild as any;
    this.panelREf = this.containerREf.lastElementChild as any;

    this.renderer.addClass(this.panelREf, '.trans');
   
  }

  public open() {
    this.renderer.setStyle(this.panelREf, 'display', 'block');
    this.renderer.addClass(this.buttonRef, 'active');
    this.opened = true;
  }

  public close() {
    this.renderer.setStyle(this.panelREf, 'display', 'none');
    this.renderer.removeClass(this.buttonRef, 'active');
    this.opened = false;
  }

}
