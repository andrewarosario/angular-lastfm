import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminHeaderComponent
  ],
  exports: [
    AdminHeaderComponent
  ]
})
export class SharedModule {}
