import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ManualScrobbleComponent } from './manual-scrobble/manual-scrobble.component';
import { ScrobbleRouting } from './scrobble.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ScrobbleRouting
  ],
  declarations: [
    ManualScrobbleComponent
  ]
})
export class ScrobbleModule { }
