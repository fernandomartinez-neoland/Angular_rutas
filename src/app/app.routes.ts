import { Routes } from '@angular/router';
import { RutaComponent } from './ruta/ruta.component';
import { SubrutaComponent } from './subruta/subruta.component';

export const routes: Routes = [
    {
        path: 'ruta',
        component: RutaComponent,
        children: [
            {
                path: 'subruta',
                component: SubrutaComponent
            }
        ]
    }
];
