import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileHomeComponent } from './user-profile-home.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileHomeComponent,
    children: [
      {
        path: 'share-location',
        loadChildren: () =>
          import('./pages/share-location-page/share-location-page.module').then(
            (m) => m.ShareLocationPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'share-location',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule {}
