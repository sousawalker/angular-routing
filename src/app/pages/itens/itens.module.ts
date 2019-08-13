import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ItensListComponent } from './';

@NgModule({
  declarations: [
    ItensListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: ItensListComponent
        }
      ]
    )
  ]
})
export class ItensModule { }
