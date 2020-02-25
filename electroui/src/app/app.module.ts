import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CustomFormsModule } from 'ngx-custom-validators';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CarauselComponent } from './components/homepage/carausel/carausel.component';
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
import { AsideComponent } from './components/store/aside/aside.component';
import { PrdctsComponent } from './components/store/prdcts/prdcts.component';
import { PrdctComponent } from './components/store/prdcts/prdct/prdct.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrdersComponent } from './components/profile/orders/orders.component';
import { AdressesComponent } from './components/profile/adresses/adresses.component';
import { WishlistComponent } from './components/profile/wishlist/wishlist.component';
import { AccountComponent } from './components/profile/account/account.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthService } from './services/auth.service';

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
    AsideComponent,
    PrdctsComponent,
    PrdctComponent,
    CheckoutComponent,
    LoginComponent,
    ProfileComponent,
    OrdersComponent,
    AdressesComponent,
    WishlistComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
