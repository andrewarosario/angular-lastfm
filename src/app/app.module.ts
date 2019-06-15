import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    CoreModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
