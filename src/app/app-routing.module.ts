import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FoodListComponent } from './food-list/food-list.component';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent
      },
      {
        path: 'menulist',
        component: FoodListComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
