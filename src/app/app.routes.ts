import { Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    // {
    //     path: '/login',
    //     component: LoginPageComponent
    // }


    // { // /products/nike-air-max-2045
    //     path: 'products',
    //     children: [
    //         {
    //             path: ':product_id',
    //             component: ProductDetailsComponent
    //         }
    //     ]
    // }
];
