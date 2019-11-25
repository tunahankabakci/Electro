import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CarauselComponent } from './components/carausel/carausel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    NewsletterComponent,
    CarauselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
