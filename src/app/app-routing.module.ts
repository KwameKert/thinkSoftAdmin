import { NgModule } from '@angular/core';
import { RouterModule, Routes ,PreloadAllModules} from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {DefaultComponent} from './layouts/default/default.component';
import { FleetManangerComponent } from './layouts/fleet-mananger/fleet-mananger.component';

const routes: Routes= [
{
  path:'', 
  component: AuthLayoutComponent,
  loadChildren: () => import('./modules/authentication/authentication.module')
                     .then(m => m.AuthenticationModule)
},

{
  path:'admin', 
  component: DefaultComponent,
  loadChildren: () => import('./views/admin/admin.module')
                     .then(m => m.AdminModule)
},
{
  path:'fleet_manager', 
  component: FleetManangerComponent,
  loadChildren: () => import('./views/fleet-manager/fleet-manager.module')
                     .then(m => m.FleetManagerModule)
},


// {
//   path:'', 
//   component: DefaultComponent,
//   loadChildren: () => import('./modules/student/student.module')
//                      .then(m => m.StudentModule)
// },
//{path: "**", redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
