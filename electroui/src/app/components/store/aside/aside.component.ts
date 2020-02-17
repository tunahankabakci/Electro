import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
declare var jQuery: any;
import noUiSlider from 'nouislider'



@Component({
	selector: 'app-aside',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './aside.component.html',
	styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

	constructor() { }

	priceMin:number
	priceMax:number
	priceSlider:any
	minProductPrice:number
	maxProductPrice:number

	ngOnInit() {

		this.priceMin=1
		this.priceMax=999

		this.minProductPrice=1
		this.maxProductPrice=999

		var priceInputMax = document.getElementById('price-max') as noUiSlider.Instance,
			priceInputMin = document.getElementById('price-min') as noUiSlider.Instance;

		this.priceSlider = document.getElementById('price-slider') as noUiSlider.Instance;
		noUiSlider.create(this.priceSlider, {
			start: [this.minProductPrice,this.maxProductPrice],
			connect: true,
			step: 1,
			range: {
				'min': this.minProductPrice,
				'max': this.maxProductPrice
			}
		});

		this.priceSlider.noUiSlider.on('update', function (values, handle) {
			var value = values[handle];
			if (handle) {
				priceInputMax.value = value;
			} else {
				priceInputMin.value = value;
			}
		});
	}


	minQtyUp(){
		if(this.priceMin<this.priceMax){
			this.priceMin=this.priceMin+1;
		}
		this.updatePriceSlider("min",this.priceMin,this.priceSlider)
	}
	minQtyDown(){
		if (this.priceMin>this.minProductPrice) {
			this.priceMin=this.priceMin-1;
		}
		this.updatePriceSlider("min",this.priceMin,this.priceSlider)
	}
	maxQtyUp(){
		if (this.priceMax<this.maxProductPrice) {
			this.priceMax=this.priceMax+1;
		}
		this.updatePriceSlider("max",this.priceMax,this.priceSlider)
	}
	maxQtyDown(){
		if (this.priceMax>this.minProductPrice) {
			this.priceMax=this.priceMax-1;
		}
		this.updatePriceSlider("max",this.priceMax,this.priceSlider)
	}

	minChange(){
		this.updatePriceSlider("min",this.priceMin,this.priceSlider)
	}
	maxChange(){
		this.updatePriceSlider("max",this.priceMax,this.priceSlider)
	}


	updatePriceSlider(elem , value , priceSlider){
		if ( elem==="min" ) {
			priceSlider.noUiSlider.set([value, null]);
		} else if ( elem==="max") {
			priceSlider.noUiSlider.set([null, value]);
		}
	}
}
