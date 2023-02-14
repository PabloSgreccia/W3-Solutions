import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './views/countries/countries.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
