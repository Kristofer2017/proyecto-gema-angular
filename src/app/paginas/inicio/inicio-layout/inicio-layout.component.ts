import { Component } from '@angular/core';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { TituloComponent } from '../titulo/titulo.component';
import { GaleriaComponent } from '../galeria/galeria.component';
import { TestimoniosComponent } from '../testimonios/testimonios.component';

@Component({
  selector: 'app-inicio-layout',
  standalone: true,
  imports: [CarruselComponent, TituloComponent, GaleriaComponent, TestimoniosComponent],
  templateUrl: './inicio-layout.component.html',
  styleUrl: './inicio-layout.component.css'
})
export default class InicioLayoutComponent {

}
