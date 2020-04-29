import { Directive, ElementRef, Attribute } from "@angular/core";

@Directive({
    selector: '[pa-attr-3]'
})
export class Attr3Directive {
    constructor(
        private elementRef: ElementRef,
        @Attribute('pa-attr-class') bgClass: string
    ){
        elementRef
            .nativeElement
            .classList
            .add(bgClass || 'bg-success', 'text-red');
    }
}   