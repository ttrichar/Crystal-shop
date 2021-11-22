"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LazySource = void 0;
class LazySource {
    //  Properties
    //  Constructors
    constructor() {
        this.mountedEls = [];
    }
    //  Life Cycle
    Mount(selector) {
        let elements = [];
        if (typeof selector === 'string') {
            selector = (document.querySelectorAll(selector));
        }
        if (selector instanceof HTMLElement) {
            elements = [selector];
        }
        else {
            const nodeList = selector;
            const htmlNodes = Array.from(nodeList).filter(node => node instanceof HTMLElement)
                .map(node => node);
            elements = [
                ...htmlNodes
            ];
        }
        elements.forEach(el => {
            this.mountedEls.push(this.mountToElement(el));
        });
    }
    //  API Methods
    //  Helpers
    mountToElement(el) {
        this.setLazyLoadingAttribute(el);
        el.classList.add('sjs-lazy-image');
        return el;
    }
    setLazyLoadingAttribute(el) {
        el.setAttribute('loading', 'lazy');
        el.setAttribute('src', el.getAttribute('data-src'));
    }
}
exports.LazySource = LazySource;
