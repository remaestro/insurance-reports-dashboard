// app-routing.module.ts
import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './auth/auth.guard'; // Ensure AuthGuard exists
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect root to login
  { path: 'login', component: LoginComponent }, // Directly load LoginComponent for the login route
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard], // Protect all routes under AdminLayoutComponent with AuthGuard
    children: [
      {
        path: 'admin', // Define your protected routes here (e.g., dashboard)
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      },
      // Add other protected child routes here if needed
    ]
  },
  { path: '**', redirectTo: '/login' } // Redirect any unknown route to login
];

