import { ElementRef } from '@angular/core';
import { TargetService } from './target.service';
export interface Opts {
    mbox?: string;
    timeout?: number;
    params?: {
        [key: string]: string;
    };
    selector?: any;
}
export declare class TargetDirective {
    private elementRef;
    private targetService;
    constructor(elementRef: ElementRef, targetService: TargetService);
    addMboxClass(element: any): void;
    removeMboxClass(element: any): void;
    mbox: Opts;
}
