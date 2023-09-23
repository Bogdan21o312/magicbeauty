import { Brand, GelPolishes, SizeAndPrice } from "@prisma/client";

export type TypeGelPolishesWithBrandSizePrice = & {
  gelPolish: Omit<GelPolishes, "id" | "createdAt" | "updatedAt">
  brand: Omit<Brand, "id" | "createdAt" | "updatedAt">
  sizeAndPrice: Omit<SizeAndPrice, "id" | "createdAt" | "updatedAt">
}
