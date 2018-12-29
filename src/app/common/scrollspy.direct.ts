import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[NgScrollSpy]'
})
export class NgScrollSpyDirective {
   
    @Output() public positonChange = new EventEmitter<string>();
    private currentposition: string;
    private Tags = ['DIV'];

    constructor(private _el: ElementRef) {}

    @HostListener('scroll', ['$event'])
    onScroll(event: any) {
        let position: string;
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.Tags.some(tag => tag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    position = element.id;
                }
            }
        }
        if (position !== this.currentposition) {
            this.currentposition = position;
            this.positonChange.emit(this.currentposition);
        }
    }

}