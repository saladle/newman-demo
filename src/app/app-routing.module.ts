import { ErrorPageComponent } from './routes/error-page/error-page.component';
import { AuthGuard } from './services/auth-management/auth.guard';
import { AuthManagementComponent } from './routes/auth-management/auth-management.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'login', component: AuthManagementComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [],
  },
  { path: '**', component: ErrorPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
