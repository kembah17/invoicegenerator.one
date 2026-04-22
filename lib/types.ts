export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export interface BusinessDetails {
  companyName: string;
  address: string;
  phone: string;
  email: string;
  logo: string | null;
}

export interface ClientDetails {
  name: string;
  address: string;
  email: string;
}

export type Currency = 'USD' | 'EUR' | 'GBP' | 'NGN' | 'CAD' | 'AUD' | 'INR' | 'JPY';

export type PaymentMethod = 'cash' | 'card' | 'bank_transfer' | 'mobile_money';

export type InvoiceTemplate = 'professional' | 'modern' | 'minimal';
export type ReceiptTemplate = 'standard' | 'compact';
export type EstimateTemplate = 'professional' | 'modern';

export interface InvoiceData {
  business: BusinessDetails;
  client: ClientDetails;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  paymentTerms: string;
  items: LineItem[];
  taxRate: number;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  notes: string;
  currency: Currency;
  template: InvoiceTemplate;
}

export interface ReceiptData {
  business: BusinessDetails;
  receiptNumber: string;
  date: string;
  customerName: string;
  items: LineItem[];
  paymentMethod: PaymentMethod;
  amountPaid: number;
  changeGiven: number;
  thankYouMessage: string;
  currency: Currency;
  template: ReceiptTemplate;
}

export interface EstimateData {
  business: BusinessDetails;
  client: ClientDetails;
  quoteNumber: string;
  date: string;
  validUntil: string;
  items: LineItem[];
  taxRate: number;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  terms: string;
  currency: Currency;
  template: EstimateTemplate;
}
