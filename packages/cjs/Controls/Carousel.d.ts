export declare class Carousel {
    /**
     * Disables interactivity - 'true' disables
     */
    protected isMoving: boolean;
    /**
     * List of carousel items
     */
    protected items: Array<Element>;
    /**
     * The mounted element for internal DOM manipulations.
     */
    protected mountedEl?: HTMLElement;
    /**
     * The next button
     */
    protected nextBtn?: HTMLElement;
    /**
     * The previous button
     */
    protected prevBtn?: HTMLElement;
    /**
     * Carousel item class
     */
    protected ItemClassName: string;
    /**
     * Interval id for ref
     */
    protected IntervalId: any;
    /**
     * Carousel item class
     */
    protected NextButtonClassName: string;
    /**
     * Carousel item class
     */
    protected PrevButtonClassName: string;
    /**
     * The value of the next slide.
     */
    get NextSlide(): number;
    /**
     * The value of the previous slide.
     */
    get PreviousSlide(): number;
    /**
     * Value that tells us what frame we're on
     */
    Slide: number;
    /**
     * Total carousel items
     */
    get TotalItems(): number;
    constructor();
    Mount(selector: string | HTMLElement): void;
    SetSlide(slide: number | HTMLElement): void;
    SlideInterval(interval: number): void;
    StopInterval(): void;
    /**
     * Disable isMoving for the same duration as our transition (500ms)
     */
    protected disableInteraction(): void;
    protected mountToElement(el: HTMLElement): HTMLElement;
    /**
     * Next navigation
     */
    protected moveNext(): void;
    /**
     * Previous navigation
     */
    protected movePrev(): void;
    /**
     * Remove carousel classes
     */
    protected removeClasses(): void;
    /**
     * Setup child elements
     */
    protected setupChildElements(el?: HTMLElement): void;
    /**
     * Set carousel classes
     */
    protected setClasses(): void;
    /**
     * Click events for navigation buttons
     */
    protected setupEventListeners(): void;
}
