import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { RequireNoTokenGuard } from 'src/app/guards/require-no-token/require-no-token.guard';

export const AuthLayoutRoutes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [ RequireNoTokenGuard ] },
    { path: 'register', component: RegisterComponent }
];
