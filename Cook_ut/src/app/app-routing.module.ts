import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import{RegisterComponent} from './register/register.component';
import { ConnectionComponent } from './connection/connection.component';
import { HeaderComponent } from './header/header.component';
import { FindServicesComponent } from './find-services/find-services.component';
import {ServicesComponent} from './services/services.component';
const routes: Routes =[
  {path: '', component: HeaderComponent},
  {path:'register', component: RegisterComponent},
  {path:'connection', component: ConnectionComponent},
  {path:'header', component: HeaderComponent},
  {path:'find_services', component: FindServicesComponent},
  {path : 'services/:id', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
