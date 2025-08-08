import '../Styles/App.css'
import search from '../assets/img/search-Photoroom.png'
import barcode from '../assets/img/bar.png'


export function App() {

  const products = [
    { name: 'Arroz', code: '9384857884758' },
    { name: 'Feijão Preto', code: '9384857884759' },
    { name: 'Macarrão Espaguete', code: '9384857884760' },
    { name: 'Molho de Tomate', code: '9384857884761' },
    { name: 'Farinha de Trigo', code: '9384857884762' },
    { name: 'Açúcar', code: '9384857884763' },
    { name: 'Óleo de Soja', code: '9384857884764' },
  ]

  function initial(name: string){
    return name.charAt(0).toUpperCase()
  }

  return (
    <page className='App'>
      <view className="Cabecalho">
        <text className="name-logo">APP-SCAN</text>

        <image src={search} className="icon-search" />
      </view>

      <scroll-view className='container'>
        <text className='title'>Productos</text>

        {products.map((product, index) => (
          <view className='card-container' key={index}>
            <view className='card-initial'>
              <text className='initial'>{initial(product.name)}</text>
            </view>
            <view className='card-content' >
              <text className='name-product'>{product.name}</text>
              <text className='code-product'>{product.code}</text>
            </view>
          </view>
        ))}
      </scroll-view>
      
      <view className='fab'>
        <image src={barcode} className="icon-barcode" />
      </view>
    </page>
  )
}