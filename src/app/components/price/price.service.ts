import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class PriceService {
  getPrice(): Observable<number> {
    return of(this.randomNumber(-100, 100));
  }

  private randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
