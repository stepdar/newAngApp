import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective implements OnInit {
  @HostBinding('style.color') myTextColor: string;
  @HostBinding('style.fontSize') myFontSize: string;
  constructor( ) {}

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData: Event) {
    this.myTextColor = 'red';
    this.myFontSize =  '24px';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData: Event) {
    this.myTextColor = 'black';
    this.myFontSize =  '18px';
  }
}
