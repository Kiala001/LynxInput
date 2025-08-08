import type { IProductsRepository } from "../Domain/IProductsRepository";
import type { Product } from "../Domain/types";

export class InMemoryProductsRepository implements IProductsRepository {
    private products: Product[] = [
        { name: "Arroz Carmita",      barcode: "9384857884758" },
        { name: "Feijão Preto",       barcode: "9384857884759" },
        { name: "Macarrão Espaguete", barcode: "9384857884760" },
        { name: "Água Pura", barcode: "9384857884761" },
        { name: "Caixa de coxa", barcode: "9384857884762" },
    ];

    getAllProducts(): Product[]{
       return this.products;
    } 

    
}