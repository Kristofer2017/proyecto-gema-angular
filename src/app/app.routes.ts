import { Routes } from '@angular/router';

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
