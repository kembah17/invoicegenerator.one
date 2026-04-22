import { Currency } from './types';

export const CURRENCIES: { value: Currency; label: string; symbol: string; locale: string }[] = [
  { value: 'USD', label: 'USD ($)', symbol: '$', locale: 'en-US' },
  { value: 'EUR', label: 'EUR (€)', symbol: '€', locale: 'de-DE' },
  { value: 'GBP', label: 'GBP (£)', symbol: '£', locale: 'en-GB' },
  { value: 'NGN', label: 'NGN (₦)', symbol: '₦', locale: 'en-NG' },
  { value: 'CAD', label: 'CAD ($)', symbol: 'C$', locale: 'en-CA' },
  { value: 'AUD', label: 'AUD ($)', symbol: 'A$', locale: 'en-AU' },
  { value: 'INR', label: 'INR (₹)', symbol: '₹', locale: 'en-IN' },
  { value: 'JPY', label: 'JPY (¥)', symbol: '¥', locale: 'ja-JP' },
];

export function formatCurrency(amount: number, currency: Currency): string {
  const curr = CURRENCIES.find(c => c.value === currency);
  if (!curr) return amount.toFixed(2);
  try {
    return new Intl.NumberFormat(curr.locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: currency === 'JPY' ? 0 : 2,
      maximumFractionDigits: currency === 'JPY' ? 0 : 2,
    }).format(amount);
  } catch {
    return `${curr.symbol}${amount.toFixed(currency === 'JPY' ? 0 : 2)}`;
  }
}

export function getCurrencySymbol(currency: Currency): string {
  const curr = CURRENCIES.find(c => c.value === currency);
  return curr?.symbol || '$';
}
