import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('@pages/login/login.component')
    },{
        path: 'boards',
        loadComponent: () => import('@pages/boards/boards.component')
    },{
        path: 'board',
        loadComponent: () => import('@pages/board/board.component')
    },{
        path: 'scroll',
        loadComponent: () => import('@pages/scroll/scroll.component')
    }
];
