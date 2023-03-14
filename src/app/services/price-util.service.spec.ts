import { CurrencyDisplay, PriceUtil } from './price-util.service';

// Other imports
describe('PriceUtilService', () => {
  it('format price with positiv number and currency as symbol', () => {
    // given
    const price: number = 99;
    const currencyDisplay: CurrencyDisplay = 'symbol';

    // when
    const formattedPrice = PriceUtil.formatPrice(price, currencyDisplay);

    // then
    expect(formattedPrice).toBe('99 €');
  });

  it('format price with positiv number and currency as name', () => {
    // given
    const price: number = 99;
    const currencyDisplay: CurrencyDisplay = 'name';

    // when
    const formattedPrice = PriceUtil.formatPrice(price, currencyDisplay);

    // then
    expect(formattedPrice).toBe('99 Euro');
  });

  it('format price with negative number and currency as symbol', () => {
    // given
    const price: number = -99;
    const currencyDisplay: CurrencyDisplay = 'symbol';

    // when
    const formattedPrice = PriceUtil.formatPrice(price, currencyDisplay);

    // then
    expect(formattedPrice).toBe('(-) 99 €');
  });

  it('format price with negative number and currency as name', () => {
    // given
    const price: number = -99;
    const currencyDisplay: CurrencyDisplay = 'name';

    // when
    const formattedPrice = PriceUtil.formatPrice(price, currencyDisplay);

    // then
    expect(formattedPrice).toBe('(-) 99 Euro');
  });
});
