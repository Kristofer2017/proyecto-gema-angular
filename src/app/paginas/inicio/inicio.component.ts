import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleArrowRight, faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent {
  flechaBoton = faCircleArrowRight;
  btnCarruselIzq = faCircleLeft;
  btnCarruselDer = faCircleRight;
}
