import { useNavigate } from "../Routes/useNavigate";
import '../Styles/Home.css';
import search from '../assets/img/search-Photoroom.png'
import barcode from '../assets/img/bar.png'
import { InMemoryProductsRepository } from "../infra/InMemoryProductsRepository";
import { useContext, useEffect, useState } from "@lynx-js/react";
import type { IProductsRepository } from "../Domain/IProductsRepository";
import type { Product } from "../Domain/types";
import { ProductContext } from "../Routes/ProductContext";


export function Home({
  repo = new InMemoryProductsRepository(),
}: {
  repo?: IProductsRepository;
}) {
  const nav = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const result = repo.getAllProducts();
    if (result instanceof Promise) result.then(setProducts);
    else setProducts(result);
  }, [repo]);
    
  function initial(name: string) {
    return name.charAt(0).toUpperCase()
  }

  return(
    <page className='Home'>
      <view className="Cabecalho">
        <text className="name-logo">APP-SCAN</text>
        <image src={search} className="icon-search" />
      </view>

      <scroll-view className='container'>
        <text className='title'>Productos</text>

        {products.map((product, index) => (
          <view className='card-container' key={index} bindtap={() => nav('info', { barcode: product.barcode, name: product.name })}>
            <view className='card-initial'>
              <text className='initial'>{initial(product.name)}</text>
            </view>
            <view className='card-content' >
              <text className='name-product'>{product.name}</text>
              <text className='code-product'>{product.barcode}</text>
            </view>
          </view>
        ))}
      </scroll-view>
      
      <view className='fab'>
        <image src={barcode} className="icon-barcode" bindtap={() => nav("scan")}/>
      </view>
    </page>
  )
}
