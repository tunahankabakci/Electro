import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { ProfileComponent } from './components/profile/profile.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "profile", component: ProfileComponent },
  { path: "product/:id", component: ProductPageComponent },
  { path: "", component: HomepageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
