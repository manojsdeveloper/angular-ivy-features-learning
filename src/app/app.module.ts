import { Component, NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CanActivate, Router, RouterModule, Routes } from '@angular/router';
import { AnotherModule } from './another.module';

@Component({
  template: '<br/>Welcome Router Testing, we are in Home-Page'
})
export class Testing {}

@Component({
  template: "<br/><br/>Hello World, i'm redirected"
})
export class Redirected {}

@Injectable({ providedIn: 'root' })
export class Activator implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    return this.router.parseUrl('/redirected');
  }
}

const routes: Routes = [
  { path: '', component: Testing },
  { path: 'activate', children: [], canActivate: [Activator] },
  { path: 'redirected', component: Redirected },
  {
    path: 'another',
    loadChildren: (): Promise<typeof AnotherModule> =>
      import('./another.module').then(module => module.AnotherModule)
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
