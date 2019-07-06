import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import { CallbackComponent } from '../layouts/callback/callback.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    CallbackComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
