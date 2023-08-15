import {formatMoney} from 'utils';

describe('formatMoney', () => {
  it('should format money', () => {
    expect(formatMoney(1000)).toEqual('₦ 1,000.00');
    expect(formatMoney(1000, 'USD')).toEqual('$ 1,000.00');
    expect(formatMoney(1000, 'GBP')).toEqual('£ 1,000.00');
    expect(formatMoney(1000, 'EUR')).toEqual('€ 1,000.00');
    expect(formatMoney(1000, 'JPY')).toEqual('¥ 1,000.00');
    expect(formatMoney(1000, 'CAD')).toEqual('$ 1,000.00');
    expect(formatMoney(1000, 'AUD')).toEqual('$ 1,000.00');

    expect(formatMoney(1000, 'SGD')).toEqual('$ 1,000.00');
    expect(formatMoney(1000, 'ZAR')).toEqual('R 1,000.00');
  });

  it('should format money with decimals', () => {
    expect(formatMoney(1000, 'USD', 2)).toEqual('$ 1,000.00');
    expect(formatMoney(1000, 'GBP', 2)).toEqual('£ 1,000.00');
    expect(formatMoney(1000, 'EUR', 2)).toEqual('€ 1,000.00');
    expect(formatMoney(1000, 'JPY', 2)).toEqual('¥ 1,000.00');
    expect(formatMoney(1000, 'CAD', 2)).toEqual('$ 1,000.00');
    expect(formatMoney(1000, 'AUD', 2)).toEqual('$ 1,000.00');

    expect(formatMoney(1000, 'SGD', 2)).toEqual('$ 1,000.00');
    expect(formatMoney(1000, 'ZAR', 2)).toEqual('R 1,000.00');
  });
});
