import {Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '[appHelloWorld]'
})
export class HelloWorldDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
