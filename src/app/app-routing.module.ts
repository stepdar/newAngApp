import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {UserProfileComponent} from './user-profile/user-profile.component';
import {SignUpComponent} from './sign-up/sign-up.component';


const appRoutes: Routes = [
  {path: 'user', component: UserProfileComponent},
  {path: 'signup', component: SignUpComponent},
  {path: '', redirectTo: '/signup', pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,
      {
        enableTracing: true, // <-- debugging purposes on
      })
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
