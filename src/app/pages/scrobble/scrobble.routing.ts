import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ManualScrobbleComponent } from './manual-scrobble/manual-scrobble.component';
import { RequireTokenGuard } from 'src/app/guards/require-token/require-token.guard';

export const routes: Routes = [
    {
      path: '',
      component: ManualScrobbleComponent,
      canActivate: [ RequireTokenGuard ],
      children: [
        {
          path: 'manual',
          component: ManualScrobbleComponent,
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrobbleRouting {}
