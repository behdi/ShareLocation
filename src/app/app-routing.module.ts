import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user-profile',
    loadChildren: () =>
      import('src/app/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
  },
  {
    path: '',
    redirectTo: 'user-profile',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
