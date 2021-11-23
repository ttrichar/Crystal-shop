export class Carousel {
    //  Constructors
    constructor() {
        this.isMoving = true;
        this.items = [];
        this.ItemClassName = 'sjs-carousel-item';
        this.NextButtonClassName = 'sjs-carousel-button-next';
        this.PrevButtonClassName = 'sjs-carousel-button-prev';
        this.Slide = 0;
        this.IntervalId = 0;
    }
    /**
     * The value of the next slide.
     */
    get NextSlide() {
        if (this.Slide >= this.TotalItems - 1) {
            return 0;
        }
        else {
            return this.Slide + 1;
        }
    }
    /**
     * The value of the previous slide.
     */
    get PreviousSlide() {
        if (this.Slide <= 0) {
            return this.TotalItems - 1;
        }
        else {
            return this.Slide - 1;
        }
    }
    /**
     * Total carousel items
     */
    get TotalItems() {
        var _a;
        return ((_a = this.items) === null || _a === void 0 ? void 0 : _a.length) || 0;
    }
    //  API Methods
    Mount(selector) {
        if (typeof selector === 'string') {
            selector = document.querySelector(selector);
        }
        this.mountedEl = this.mountToElement(selector);
    }
    SetSlide(slide) {
        var _a;
        console.log("set slide: ", this.items);
        if (slide instanceof HTMLElement) {
            slide = (_a = this.items) === null || _a === void 0 ? void 0 : _a.indexOf(slide);
        }
        if (!this.isMoving) {
            this.removeClasses();
            this.Slide = slide;
            this.setClasses();
        }
    }
    SlideInterval(interval) {
        this.IntervalId = setInterval(this.moveNext.bind(this), interval);
    }
    StopInterval() {
        clearInterval(this.IntervalId);
    }
    //  Helpers
    /**
     * Disable isMoving for the same duration as our transition (500ms)
     */
    disableInteraction() {
        this.isMoving = true;
        setTimeout(() => {
            this.isMoving = false;
        }, 500);
    }
    mountToElement(el) {
        this.setupChildElements(el);
        this.setClasses();
        this.setupEventListeners();
        this.isMoving = false;
        el.classList.add('sjs-carousel');
        return el;
    }
    /**
     * Next navigation
     */
    moveNext() {
        this.SetSlide(this.NextSlide);
    }
    /**
     * Previous navigation
     */
    movePrev() {
        this.SetSlide(this.PreviousSlide);
    }
    /**
     * Remove carousel classes
     */
    removeClasses() {
        this.items[this.PreviousSlide].classList.remove('prev');
        this.items[this.Slide].classList.remove('active');
        this.items[this.NextSlide].classList.remove('next');
    }
    /**
     * Setup child elements
     */
    setupChildElements(el) {
        const workingEl = el || this.mountedEl;
        this.items = Array.from(workingEl.querySelectorAll(`.${this.ItemClassName}`));
        this.nextBtn = (workingEl.querySelector(`.${this.NextButtonClassName}`));
        this.prevBtn = (workingEl.querySelector(`.${this.PrevButtonClassName}`));
    }
    /**
     * Set carousel classes
     */
    setClasses() {
        this.items[this.PreviousSlide].classList.add('prev');
        this.items[this.Slide].classList.add('active');
        this.items[this.NextSlide].classList.add('next');
    }
    /**
     * Click events for navigation buttons
     */
    setupEventListeners() {
        var _a, _b;
        console.log("TEST: ", this.nextBtn);
        (_a = this.nextBtn) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.moveNext.bind(this));
        (_b = this.prevBtn) === null || _b === void 0 ? void 0 : _b.addEventListener('click', this.movePrev.bind(this));
    }
}
