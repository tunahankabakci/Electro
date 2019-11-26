import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CarauselComponent } from './components/carausel/carausel.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeadlineComponent } from './components/homepage/headline/headline.component';
import { TopSellingComponent } from './components/homepage/top-selling/top-selling.component';
import { HotDealComponent } from './components/homepage/hot-deal/hot-deal.component';
import { TopSellingWidgetComponent } from './components/homepage/top-selling-widget/top-selling-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    NewsletterComponent,
    CarauselComponent,
    HomepageComponent,
    HeadlineComponent,
    TopSellingComponent,
    HotDealComponent,
    TopSellingWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
