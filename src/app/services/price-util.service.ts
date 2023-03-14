const currencyDisplayValues = ['symbol', 'name'] as const;
export type CurrencyDisplay = typeof currencyDisplayValues[number];

export class PriceUtil {
  static formatPrice(price: number, currencyDisplay: CurrencyDisplay) {
    let formattedPrice: string =
      price > 0 ? `${price}` : `(-) ${Math.abs(price)}`;

    let currency: string;
    switch (currencyDisplay) {
      case currencyDisplayValues[0]:
        currency = '€';
        break;
      case currencyDisplayValues[1]:
      default:
        currency = 'Euro';
        break;
    }

    return `${formattedPrice} ${currency}`;
  }
}
