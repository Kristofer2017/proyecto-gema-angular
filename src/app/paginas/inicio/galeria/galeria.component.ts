import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})

export class GaleriaComponent implements OnInit, AfterViewInit {
    @ViewChild('imageDisplay', { static: true }) imageDisplay!: ElementRef<HTMLElement>;
    @ViewChild('sliderNavigation', { static: true }) sliderNavigation!: ElementRef<HTMLElement>;
    @ViewChild('prevButton', { static: true }) prevButton!: ElementRef<HTMLElement>;
    @ViewChild('nextButton', { static: true }) nextButton!: ElementRef<HTMLElement>;
  
    navButtons!: HTMLButtonElement[];
    currentSlideIndex: number = 0;
    preloadedImages: { [src: string]: HTMLImageElement } = {};
  
    constructor(private renderer: Renderer2) {}
  
    ngOnInit(): void {
      // Aquí podrías inicializar otras cosas
    }
  
    ngAfterViewInit(): void {
      // Inicializar después de que el DOM esté completamente cargado
      this.initialize();
    }
  
    initialize() {
      // Acceder a los elementos del DOM y establecer las referencias
      this.navButtons = Array.from(this.sliderNavigation.nativeElement.querySelectorAll('.nav-button')) as HTMLButtonElement[];
      this.setupSlider();
      this.preloadImages();
      this.eventListeners();
    }
  
    setupSlider() {
      this.showSlide(this.currentSlideIndex);
    }
  
    showSlide(index: number) {
      this.currentSlideIndex = index;
      const navButtonImg = this.navButtons[this.currentSlideIndex].querySelector('img');
      if (navButtonImg) {
        const imgClone = navButtonImg.cloneNode() as HTMLImageElement;
        this.imageDisplay.nativeElement.replaceChildren(imgClone);
      }
      this.updateNavButtons();
    }
  
    updateNavButtons() {
      this.navButtons.forEach((button, buttonIndex) => {
        const isSelected = buttonIndex === this.currentSlideIndex;
        button.setAttribute('aria-selected', String(isSelected));
        if (isSelected) button.focus();
      });
    }
  
    preloadImages() {
      this.navButtons.forEach((button) => {
        const imgElement = button.querySelector('img');
        if (imgElement) {
          const imgSrc = imgElement.src;
          if (!this.preloadedImages[imgSrc]) {
            this.preloadedImages[imgSrc] = new Image();
            this.preloadedImages[imgSrc].src = imgSrc;
          }
        }
      });
    }
  
    eventListeners() {
      this.renderer.listen('document', 'keydown', (event: KeyboardEvent) => {
        this.handleAction(event.key);
      });
  
      this.renderer.listen(this.sliderNavigation.nativeElement, 'click', (event: MouseEvent) => {
        const targetButton = (event.target as HTMLElement).closest('.nav-button');
        const index = targetButton ? this.navButtons.indexOf(targetButton as HTMLButtonElement) : -1;
        if (index !== -1) {
          this.showSlide(index);
        }
      });
  
      this.renderer.listen(this.prevButton.nativeElement, 'click', () => this.handleAction('prev'));
      this.renderer.listen(this.nextButton.nativeElement, 'click', () => this.handleAction('next'));
    }
  
    handleAction(action: string) {
      if (action === 'Home') {
        this.currentSlideIndex = 0;
      } else if (action === 'End') {
        this.currentSlideIndex = this.navButtons.length - 1;
      } else if (action === 'ArrowRight' || action === 'next') {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.navButtons.length;
      } else if (action === 'ArrowLeft' || action === 'prev') {
        this.currentSlideIndex = (this.currentSlideIndex - 1 + this.navButtons.length) % this.navButtons.length;
      }
  
      this.showSlide(this.currentSlideIndex);
    }
  }
  