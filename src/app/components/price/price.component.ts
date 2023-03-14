import { Component, OnInit } from '@angular/core';
import { PriceUtil } from '../../services/price-util.service';
import { PriceService } from './price.service';

@Component({
  selector: 'app-price',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class PriceComponent implements OnInit {
  price: string;

  constructor(private priceService: PriceService) {}

  ngOnInit(): void {
    this.getPrice();
  }

  getPrice(): void {
    this.priceService
      .getPrice()
      .subscribe(
        (price) => (this.price = PriceUtil.formatPrice(price, 'symbol'))
      );
  }
}
