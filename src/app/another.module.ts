import { Component, NgModule, Injectable } from '@angular/core';
import { HelloComponent } from './hello.component';
import { CanActivate, Router, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  template:
    '<br/>Welcome ""Another"" Router Testing Modules, we are in Home-Page'
})
export class Testing {}

@Component({
  template: "<br/><br/>Hello World, i'm redirected, Another Router"
})
export class Redirected {}

const routes: Routes = [{ path: '', component: Testing }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  bootstrap: [HelloComponent]
})
export class AnotherModule {}
