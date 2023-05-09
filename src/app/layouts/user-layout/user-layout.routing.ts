import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const UserLayoutRoutes: Routes = [
    { path: '/user',          component: LoginComponent }
];
