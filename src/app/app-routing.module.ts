import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullLayoutComponent} from './full-layout/full-layout.component';
import {ProductsComponent} from './products/products.component';


const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'products/all',
        component: ProductsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
