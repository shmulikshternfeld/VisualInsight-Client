import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // Redirect empty path to '/login'
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // Optional: Wildcard route for 404
    { path: '**', redirectTo: '/login' }
];
