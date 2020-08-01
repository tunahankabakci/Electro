import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { Product } from "../models/product";
declare let alertify;

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient, private router: Router) {}
  path = environment.path;
  product: Product;

  getProductData(id: string) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.get(this.path + `/products/` + id, { headers: headers });
  }
}
