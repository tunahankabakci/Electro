import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.css']
})
export class TopSellingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    (function($) {
      "use strict"
      // Products Slick
      $('.products-slick').each(function() {
        var $this = $(this),
            $nav = $this.attr('data-nav');
    
        $this.slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          prevArrow: $('.slick-btn-prev'),
          nextArrow: $('.slick-btn-next'),
          speed: 300,
          dots: false,
          arrows: true,
          appendArrows: $nav ? $nav : false,
          responsive: [{
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
        });
      });
    })(jQuery);
    



    
  }

  
}

