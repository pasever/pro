import { Directive, ElementRef, Attribute } from "@angular/core";

// similar functionality as Directive 3
@Directive({
    selector: '[pa-attr-4]'
})
export class Attr4Directive {
    constructor(
        private elementRef: ElementRef,
        @Attribute('pa-attr-4') bgClass: string
    ) {
        elementRef
            .nativeElement
            .classList
            .add(bgClass || 'bg-success', 'text-red');
    }
}