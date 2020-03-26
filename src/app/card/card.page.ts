import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  url:any;
  long:any;
  wide:any;
  high:any;
  weight:any;

  constructor(
    public router: Router,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.url = params.url,
      this.long = params.long
      this.wide = params.wide
      this.high = params.high
      this.weight = params.weight
    });
  }

}
