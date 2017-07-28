var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
const win = window;
let TargetService = class TargetService {
    getOffer(opts) {
        return new Promise((resolve, reject) => {
            opts = opts || {};
            if (!opts.mbox) {
                reject('Mbox name not specified!');
            }
            const atOpts = {
                mbox: opts.mbox,
                params: opts.params,
                timeout: opts.timeout,
                success: (response) => {
                    if (response && response.length > 0) {
                        resolve({
                            mbox: opts.mbox,
                            offer: response,
                            selector: opts.selector
                        });
                    }
                    else {
                        reject('Empty offer');
                    }
                },
                error: (status, error) => {
                    reject(error);
                }
            };
            win.adobe.target.getOffer(atOpts);
        });
    }
    applyOffer(offer) {
        return new Promise((resolve, reject) => {
            win.adobe.target.applyOffer(offer);
            resolve();
        });
    }
};
TargetService = __decorate([
    Injectable()
], TargetService);
export { TargetService };
