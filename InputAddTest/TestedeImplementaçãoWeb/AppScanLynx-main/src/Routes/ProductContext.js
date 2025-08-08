import { createContext, useState} from '@lynx-js/react';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [product, setProduct] = useState(null);

    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider>
    );
}