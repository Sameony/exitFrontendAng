import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../Templates/register/register.component';
import { LoginComponent } from '../Templates/login/login.component';
import { LandingPageComponent } from '../Templates/landing-page/landing-page.component';
const routes: Routes = [
  {  path:"signup",
      component: RegisterComponent,
      pathMatch: 'full'
  },
  {  path:"login",
      component: LoginComponent,
      pathMatch: 'full'
  },
  {  path:"",
      component: LandingPageComponent,
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
