import '../Styles/productScreen.css'
import { useState } from '@lynx-js/react';

interface Product {
    id: string;
    name: string;
    barcode: string;
}

export default function ProductScreen() {
    const [name, setName] = useState('');
    const [barcode, setBarcode] = useState('');
    const [products, setProducts] = useState<Product[]>([]);

    function handleAddProduct() {
        if(!name.trim() || !barcode.trim()) {
          console.log('Nome e código de barras são obrigatórios');
          return;
        }

        const newProduct = {
            id: crypto.randomUUID(),
            name: name.trim(),
            barcode: barcode.trim(),
        };
        console.log('Produto adicionado:', newProduct);
        setProducts([newProduct, ...products]);
        setName('');
        setBarcode('');
    }

    return(
        <view className="container">
      <text className="title">Cadastrar Produto</text>

      <view className="form-group">
        <text>Nome:</text>
        <input
          type='text'
          value={name}
          bindinput={(e: any) => {
            const value = e?.target?.value ?? '';
            console.log('Digitando:', e.target.value);
            setName(value);
          }}
          //bindinput={e => console.log('DIGITADO:', e.detail.value)}
          //bindinput={e => setName(e?.detail?.value ?? '')}
          placeholder="Nome do produto"
        />
      </view>

      <view className="form-group">
        <text>Código de Barras:</text>
        <input
          value={barcode}
          bindinput={e => setBarcode(e?.detail?.value ?? '')}
          placeholder="Código de barras"
        />
      </view>

      <view className="btn" bindtap={handleAddProduct}>
        <text>Salvar Produto</text>
      </view>

      <text className="subtitle">Produtos adicionados (teste):</text>
      <list list-type="single">
        {products.map(p => (
          <scroll-view key={p.id} item-key={p.id}>
            <view className="list-item">
              <text>{p.name} — {p.barcode}</text>
            </view>
          </scroll-view>
        ))}
      </list>
    </view>
    );
}