import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminHeaderComponent,
    PaginatorComponent
  ],
  exports: [
    AdminHeaderComponent,
    PaginatorComponent
  ]
})
export class SharedModule {}
