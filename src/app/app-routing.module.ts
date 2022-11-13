import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestoComponent} from './add-resto/add-resto.component';
import {ListRestoComponent} from './list-resto/list-resto.component';
import {UpdateRestoComponent} from './update-resto/update-resto.component';
import { HeadComponent } from './list-resto/head/head.component';
import { ViewRestoComponent } from './list-resto/view-resto/view-resto.component';

const routes: Routes = [

  {
    component: AddRestoComponent,
    path: 'add'
  },
  
  {
    component: UpdateRestoComponent,
    path: 'update/:id'
  },
  {
    component: HeadComponent,
    path: 'head'
  },
  {
    component: ViewRestoComponent,
    path: 'view/:id'
  },
  {
    component: ListRestoComponent,
    path: ''
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
