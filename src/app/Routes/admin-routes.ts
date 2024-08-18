import{Routes } from'@angular/router';
import { AdminModule } from '../admin/admin.module';


export const ADMIN_ROUTES: Routes= [
    {
        path:'',
        loadChildren:() =>import('../admin/admin.module').then(m =>AdminModule)
    }
]