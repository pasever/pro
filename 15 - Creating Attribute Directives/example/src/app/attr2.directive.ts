import { Directive, ElementRef } from '@angular/core'; 

@Directive({
    selector: '[pa-attr-2]'
})
export class Attr2Directive {
    constructor(
        private elementRef: ElementRef
    ) {
        elementRef.nativeElement.classList.add('bg-warning', 'text-white');
    }
}