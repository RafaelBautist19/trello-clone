import { Routes } from '@angular/router';
import { LayoutComponent } from '@layout/components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('@auth/auth.module').then((m)=>m.AuthModule)
    },
    {
        path: 'app',
        loadChildren: () => import('@layout/layout.module').then((m)=>m.LayoutModule)
    }
];
