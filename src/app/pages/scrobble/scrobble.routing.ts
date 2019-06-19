import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ManualScrobbleComponent } from './manual-scrobble/manual-scrobble.component';
import { RequireTokenGuard } from 'src/app/guards/require-token/require-token.guard';
import { BulkScrobbleComponent } from './bulk-scrobble/bulk-scrobble.component';

export const routes: Routes = [
    {
      path: '',
      canActivate: [ RequireTokenGuard ],
      children: [
        {
          path: 'manual',
          component: ManualScrobbleComponent,
        },
        {
          path: 'bulk',
          component: BulkScrobbleComponent,
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrobbleRouting {}
