import { LineItem } from './types';

export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

export function generateInvoiceNumber(): string {
  const prefix = 'INV';
  const date = new Date();
  const y = date.getFullYear().toString().slice(-2);
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const rand = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${prefix}-${y}${m}-${rand}`;
}

export function generateReceiptNumber(): string {
  const prefix = 'RCT';
  const date = new Date();
  const y = date.getFullYear().toString().slice(-2);
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const rand = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${prefix}-${y}${m}-${rand}`;
}

export function generateQuoteNumber(): string {
  const prefix = 'QTE';
  const date = new Date();
  const y = date.getFullYear().toString().slice(-2);
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const rand = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${prefix}-${y}${m}-${rand}`;
}

export function getTodayDate(): string {
  return new Date().toISOString().split('T')[0];
}

export function getDueDateDefault(): string {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  return d.toISOString().split('T')[0];
}

export function getValidUntilDefault(): string {
  const d = new Date();
  d.setDate(d.getDate() + 14);
  return d.toISOString().split('T')[0];
}

export function createEmptyLineItem(): LineItem {
  return {
    id: generateId(),
    description: '',
    quantity: 1,
    unitPrice: 0,
    amount: 0,
  };
}

export function calculateSubtotal(items: LineItem[]): number {
  return items.reduce((sum, item) => sum + item.amount, 0);
}

export function calculateTax(subtotal: number, taxRate: number): number {
  return subtotal * (taxRate / 100);
}

export function calculateDiscount(
  subtotal: number,
  discountType: 'percentage' | 'fixed',
  discountValue: number
): number {
  if (discountType === 'percentage') {
    return subtotal * (discountValue / 100);
  }
  return discountValue;
}

export function calculateTotal(
  subtotal: number,
  tax: number,
  discount: number
): number {
  return Math.max(0, subtotal + tax - discount);
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

export function getPaymentMethodLabel(method: string): string {
  const labels: Record<string, string> = {
    cash: 'Cash',
    card: 'Credit/Debit Card',
    bank_transfer: 'Bank Transfer',
    mobile_money: 'Mobile Money',
  };
  return labels[method] || method;
}
