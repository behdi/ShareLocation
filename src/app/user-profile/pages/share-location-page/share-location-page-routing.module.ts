import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareLocationPageComponent } from './share-location-page.component';

const routes: Routes = [{ path: '', component: ShareLocationPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareLocationPageRoutingModule {}
