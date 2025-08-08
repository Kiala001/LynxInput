import type { IOffersRepository } from "../Domain/IOffersRepository";
import type { Offer } from "../Domain/types";

export class InMemoryOffersRepository implements IOffersRepository{
    private data: Record<string, Offer[]> = {
        "9384857884758":[
            { seller: "Arreiou", price: 56000 },
            { seller: "Angomart", price: 20000 },
            { seller: "Kero",     price: 15000 },
            { seller: "Kibabo",   price: 10000 },
            { seller: "Candando",   price: 40000 },
        ],
        "9384857884759":[
            { seller: "Shoprite", price: 23000 },
            { seller: "Candando", price: 10000 },
            { seller: "Kero",     price: 5000 },
            { seller: "Kibabo",   price: 2500 },
        ],
        "9384857884760":[
            { seller: "Candando", price: 1500 },
            { seller: "Kero",     price: 2500 },
            { seller: "Kibabo",   price: 1000 },
        ],
    };

    getOffersByProductId(productId: string): Offer[] {
        return this.data[productId] ?? [];
    }
}