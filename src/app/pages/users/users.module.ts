import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { UsersListComponent } from './';

@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: UsersListComponent
        }
      ]
    )
  ]
})
export class UsersModule { }
