import { AuthCompComponent } from './layouts/Auth/auth-comp/auth-comp.component';
import { AdminLayoutComponent } from './layouts/Admin/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/Admin/admin-layout-module/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: '',
    component: AuthCompComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/Auth/authModule/auth.module').then(m => m.AuthModule)
      }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
