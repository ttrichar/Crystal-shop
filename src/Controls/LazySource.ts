export class LazySource {
  //  Fields
  protected mountedEls: Array<HTMLElement>;

  //  Properties

  //  Constructors
  constructor() {
    this.mountedEls = [];
  }

  //  Life Cycle
  public Mount(selector: string | HTMLElement | NodeListOf<Element>): void {
    let elements: Array<HTMLElement> = [];

    if (typeof selector === 'string') {
      selector = <NodeListOf<Element>>(
        document.querySelectorAll(<string>selector)
      );
    }

    if (selector instanceof HTMLElement) {
      elements = [selector];
    } else {
      const nodeList = <NodeListOf<Element>>selector;

      const htmlNodes = Array.from(nodeList).filter(node => node instanceof HTMLElement)
        .map(node => <HTMLElement>node);
      
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
  protected mountToElement(el: HTMLElement): HTMLElement {
    this.setLazyLoadingAttribute(el);

    el.classList.add('sjs-lazy-image');

    return el;
  }

  protected setLazyLoadingAttribute(el: HTMLElement) {
    el.setAttribute('loading', 'lazy');
    
    el.setAttribute('src', <string>el.getAttribute('data-src'));
  }
}
