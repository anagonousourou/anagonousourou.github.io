import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'mentions-legales',
    component: MentionsLegalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
