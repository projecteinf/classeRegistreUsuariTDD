import { Routes } from '@angular/router';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { ListComponent } from './components/user/list/list.component';

export const routes: Routes = [
    {path: 'signup', component: SignUpComponent},
    {path: 'listusers', component: ListComponent}
];
