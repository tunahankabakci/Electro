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
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductViewComponent } from './components/product-page/product-view/product-view.component';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './components/store/store.component';

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
    TopSellingWidgetComponent,
    BreadcrumbComponent,
    ProductPageComponent,
    ProductViewComponent,
    StoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
