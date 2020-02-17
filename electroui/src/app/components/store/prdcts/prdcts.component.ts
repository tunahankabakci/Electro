import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-prdcts',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './prdcts.component.html',
  styleUrls: ['./prdcts.component.css']
})
export class PrdctsComponent implements OnInit {

  p: number = 1;
  collection: any[] = ["1","2","3","4","1","2","3","4","1","2","3","1","2","3","4","1","2","3","4","1","2","3","4","1","2","3","4","1","2","3","4"];

  constructor() { }

  ngOnInit() {
    
  }

}
