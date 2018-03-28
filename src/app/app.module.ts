import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RootCmpComponent } from './root-cmp/root-cmp.component';
import { ChildCmpComponent } from './child-cmp/child-cmp.component';
import { GrandChildCmpComponent } from './grand-child-cmp/grand-child-cmp.component';
import { SupperGrandChildCmpComponent } from './supper-grand-child-cmp/supper-grand-child-cmp.component';
import { BtnEventControlComponent } from './btn-event-control/btn-event-control.component';
import { WrappingComponent } from './wrapping/wrapping.component';
import { WrappingBtnComponent } from './wrapping-btn/wrapping-btn.component';


@NgModule({
  declarations: [
    AppComponent,
    RootCmpComponent,
    ChildCmpComponent,
    GrandChildCmpComponent,
    SupperGrandChildCmpComponent,
    BtnEventControlComponent,
    WrappingComponent,
    WrappingBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
