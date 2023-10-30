import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { RegisterModule } from './pages/register/register.module';
import { IndexModule } from './pages/index/index.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule,
    IndexModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
