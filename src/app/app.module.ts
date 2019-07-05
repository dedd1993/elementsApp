import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    // AppComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    SidenavComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(SidenavComponent, { injector: this.injector });

    customElements.define('custom-sidenav', el);
  }
}
