import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";
declare var jQuery: any;
declare let alertify;

@Component({
  selector: "app-product-view",
  templateUrl: "./product-view.component.html",
  styleUrls: ["./product-view.component.css"],
  providers: [ProductService],
})
export class ProductViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  qty: number = 1;
  product: Product=<Product>{};
  test = "asd";

  qtyUp() {
    this.qty = this.qty + 1;
  }

  qtyDown() {
    if (this.qty != 1) {
      this.qty = this.qty - 1;
    }
  }

  ngOnInit() {
    try{
      this.route.params.subscribe((params) => {
        this.productService.getProductData(params.id).subscribe(
          (data: Product) => {
            this.product = data
            console.log("test")
          },
          (error) => {
            alertify.error("The product can not find. Redirecting to homepage!");
            console.log(error);
          }
        );
      });
    }catch(error){
      console.log(error)
    }

    (function ($) {
      $("#product-tab .nav-tabs a").on("click", function () {
        $("#product-tab .nav-tabs").find("li.active").removeClass("active");
        $(this).parent("li").addClass("active");
      });

      // Product Main img Slick
      $("#product-main-img").slick({
        infinite: true,
        speed: 300,
        dots: false,
        arrows: true,
        fade: true,
        asNavFor: "#product-imgs",
      });

      // Product imgs Slick
      $("#product-imgs").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0,
        vertical: true,
        asNavFor: "#product-main-img",
        responsive: [
          {
            breakpoint: 767,
            settings: {
              vertical: false,
              arrows: false,
              dots: true,
            },
          },
        ],
      });

      // Product img zoom
      var zoomMainProduct = document.getElementById("product-main-img");
      if (zoomMainProduct) {
        $("#product-main-img .product-preview").zoom();
      }
    })(jQuery);
  }
}
