import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailPageComponent } from './view/user-detail-page/user-detail-page.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'users/:userId',
        component: UserDetailPageComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
