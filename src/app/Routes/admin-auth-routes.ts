import{Routes } from'@angular/router';
import { AuthModule } from '../auth/auth.module';


export const AUTH_ROUTES: Routes= [
    {
        path:'',
        loadChildren:() =>import('../auth/auth.module').then(m =>AuthModule)
    }
]
