import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemsListComponent} from './items-list/items-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: ItemsListComponent,
    outlet: 'subrouter'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
