var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive, Input } from '@angular/core';
import classnames from 'classnames';
import { TargetService } from './target.service';
let TargetDirective = class TargetDirective {
    constructor(elementRef, targetService) {
        this.elementRef = elementRef;
        this.targetService = targetService;
    }
    addMboxClass(element) {
        element.className = classnames(element.className, {
            mboxDefault: element.className.indexOf('mboxDefault') === -1
        });
    }
    removeMboxClass(element) {
        element.className = element.className.replace(/\bmboxDefault\b/, '');
    }
    set mbox(mboxOpts) {
        const el = this.elementRef.nativeElement;
        mboxOpts.selector = el;
        this.addMboxClass(el);
        this.targetService.getOffer(mboxOpts)
            .then(this.targetService.applyOffer)
            .then(() => this.removeMboxClass(el))
            .catch((e) => {
            console.error(e);
            this.removeMboxClass(el);
        });
    }
};
__decorate([
    Input()
], TargetDirective.prototype, "mbox", null);
TargetDirective = __decorate([
    Directive({
        selector: '[mbox]',
        providers: [TargetService]
    })
], TargetDirective);
export { TargetDirective };
