import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./componentes/layout/layout.component'),
        children: [
            {
                path: 'inicio',
                loadComponent: () => import('./paginas/inicio/inicio.component')
            },{
                path: 'informacion',
                loadComponent: () => import('./paginas/informacion/informacion.component')
            },{
                path: 'cursos',
                loadComponent: () => import('./paginas/cursos/cursos.component')
            },{
                path: 'becas',
                loadComponent: () => import('./paginas/becas/becas.component')
            },{
                path: 'contacto',
                loadComponent: () => import('./paginas/contacto/contacto.component')
            },{
                path: 'iniciar-sesion',
                loadComponent: () => import('./paginas/login/login.component')
            },{
                path: 'crear-cuenta',
                loadComponent: () => import('./paginas/crear-cuenta/crear-cuenta.component')
            },{
                path: 'carrito',
                loadComponent: () => import('./paginas/carrito/carrito.component')
            },{
                path: 'portal',
                loadComponent: () => import('./paginas/portal/portal.component')
            },{
                path: '',
                redirectTo: 'inicio',
                pathMatch: 'full'
            }
        ]
    },{
        path: '**',
        redirectTo: 'inicio'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',  // Hace scroll al inicio en cada navegación
      anchorScrolling: 'enabled'         // Habilita el scroll a anclas si se usa un hash (#)
    })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }