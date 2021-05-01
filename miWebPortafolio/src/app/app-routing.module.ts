import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {
            path:'',
            redirectTo: '/perfil',
            pathMatch:'full',
          },
  
  {
  
    path:'perfil',
    component:PerfilComponent
  },
  {
    path:'portafolio',
    component:PortafolioComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
