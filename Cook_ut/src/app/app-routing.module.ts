import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import{RegisterComponent} from './register/register.component';
import { ConnectionComponent } from './connection/connection.component';
import { HeaderComponent } from './header/header.component';
import { FindServicesComponent } from './find-services/find-services.component';
const routes: Routes =[
  {path:'register', component: RegisterComponent},
  {path:'connection', component: ConnectionComponent},
  {path:'header', component: HeaderComponent},
  {path:'find_services', component: FindServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
