import { Routes } from '@angular/router';
import { RutaComponent } from './ruta/ruta.component';
import { SubrutaComponent } from './subruta/subruta.component';
import { RutaHomeComponent } from './ruta-home/ruta-home.component';

export const routes: Routes = [
    {
        path: 'ruta',
        component: RutaComponent,
        children: [
            {
                path: 'subruta',
                component: SubrutaComponent
            },
            {
                path: '',
                component: RutaHomeComponent
            }
        ]
    }
];
