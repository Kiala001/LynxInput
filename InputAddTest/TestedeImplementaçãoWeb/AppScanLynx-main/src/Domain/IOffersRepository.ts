import type { Offer } from "./types";

export interface IOffersRepository {
    getOffersByProductId(productId: string): Offer[] | Promise<Offer[]>;
}