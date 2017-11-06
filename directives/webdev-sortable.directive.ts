import {Directive, ElementRef, AfterViewInit, Output, EventEmitter} from '@angular/core';

declare var jQuery: any;
@Directive({
  selector: '[appWebDevSortable]'
})

export class WebdevSortableDirective implements AfterViewInit {
  @Output() orderChanged = new EventEmitter();
  constructor(private el: ElementRef) {}
  start: Number;
  stop: Number;
  ngAfterViewInit() {this.onAfterViewInit(this); }
  onAfterViewInit(element) {
    jQuery(this.el.nativeElement).sortable( {
      start: function (event, ui) {
        console.log( ui.item.index());
      },
      stop: function (event, ui) {
        console.log (ui.item.index());
        // const index = {start: this.start, stop: this.stop};
        // element.orderChanged.emit(index);
      }
    });
  }
}
