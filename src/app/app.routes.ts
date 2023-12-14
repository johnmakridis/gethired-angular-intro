import { Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'contact',
        component: ContactPageComponent,
    }
];
