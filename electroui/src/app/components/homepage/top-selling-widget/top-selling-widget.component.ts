import { Component, OnInit } from "@angular/core";
declare var jQuery: any;

@Component({
  selector: "app-top-selling-widget",
  templateUrl: "./top-selling-widget.component.html",
  styleUrls: ["./top-selling-widget.component.css"]
})
export class TopSellingWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    (function($) {
      $(".products-widget-slick").each(function() {
        var $this = $(this),
          $nav = $this.attr("data-nav");

        $this.slick({
          infinite: true,
          autoplay: true,
          speed: 300,
          dots: false,
          nextArrow:'<button class="slick-btn-prev mx-2"><i class="fas fa-chevron-circle-right"></i></button>',
          prevArrow: '<button class="slick-btn-next mx-2 "><i class="fas fa-chevron-circle-left"></i></button>',
          appendArrows: $nav ? $nav : false
        });
      });
    })(jQuery);
  }
}
