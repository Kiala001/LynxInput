import type { Product } from "./types";

export interface IProductsRepository {
    getAllProducts(): Product [] | Promise<Product[]>;
}