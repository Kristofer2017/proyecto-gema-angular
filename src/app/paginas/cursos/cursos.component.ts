import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [FontAwesomeModule,],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export default class CursosComponent {
  iconoCarrito = faCartShopping;
  iconoCheck = faCircleCheck;
}
