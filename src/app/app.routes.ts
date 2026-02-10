import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./componentes/layout/layout.component'),
        children: [
            // Paginas que dependen de la barra de navegacion
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
            },
            
            // Paginas que ocupan la pantalla completa
            {
                path: 'iniciar-sesion',
                loadComponent: () => import('./paginas/login/login.component')
            },{
                path: 'carrito',
                loadComponent: () => import('./paginas/carrito/carrito.component')
            },{
                path: 'portal',
                loadComponent: () => import('./paginas/portal/portal.component')
            },{
                path: 'registro',
                loadComponent: () => import('./paginas/crear-cuenta/crear-cuenta.component')
            },{
                path: '',
                redirectTo: 'inicio',
                pathMatch: 'full'
            }
        ]
    }
    // ,{
    //     path: 'registro',
    //     loadComponent: () => import('./paginas/crear-cuenta/crear-cuenta.component')
    // }
    ,{
        // En caso de que el usuario escriba una direccion invalida
        path: '**',
        redirectTo: 'inicio'
    }
];