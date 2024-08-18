import { Routes ,RouterModule} from '@angular/router';

import { AuthlayoutComponent } from './layout/authlayout/authlayout.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { NgModule } from '@angular/core';
import { ADMIN_ROUTES } from './Routes/admin-routes';
import { AUTH_ROUTES } from './Routes/admin-auth-routes';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {path:'employee',component:AuthlayoutComponent,children:AUTH_ROUTES},
    {path:'admin',component:AdminlayoutComponent,children:ADMIN_ROUTES},
    {path:'',pathMatch:'full', redirectTo:'employee'},
];


