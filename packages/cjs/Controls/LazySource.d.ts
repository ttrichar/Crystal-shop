export declare class LazySource {
    protected mountedEls: Array<HTMLElement>;
    constructor();
    Mount(selector: string | HTMLElement | NodeListOf<Element>): void;
    protected mountToElement(el: HTMLElement): HTMLElement;
    protected setLazyLoadingAttribute(el: HTMLElement): void;
}
