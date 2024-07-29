export type Offer = {
  applicableCreditCardType: string | null;
  createdAt: Date;
  description: string | null;
  discountPercentage: number | null;
  id: string;
  updatedAt: Date;
  validUntil: Date | null;
};
