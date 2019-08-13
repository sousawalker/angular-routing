import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { RouterModule } from '@angular/router';

import { PagesComponent } from './';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: PagesComponent
        }
      ]
    )
  ]
})
export class PagesModule { }
