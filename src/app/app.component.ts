import { CurrencyService } from './service/currency.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedCurrency: string = 'TRY';
  constructor(private currencyService: CurrencyService) {}
  sendCurrency(event: string) {
    console.log(event);
    this.currencyService.setCurrency(event);
  }
}
