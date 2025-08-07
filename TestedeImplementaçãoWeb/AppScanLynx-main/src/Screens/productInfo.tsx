import '../Styles/App.css'
import { useNavigate } from '../Routes/useNavigate'
import pencil from '../assets/img/pencil.png'
import filter from '../assets/img/filter.png'


export function ProductInfo() {

    const navigate = useNavigate()

    const products = [
        {vendedor: 'Candando', preco: '1500'},
        {vendedor: 'Kero', preco: '2500'},
        {vendedor: 'Kibabo', preco: '1000'}
    ]

    return(
        <page className='App'>
            <view className='Cabecalho'>
                <text className="name-logo" bindtap={() => navigate("home")} >APP-SCAN</text>
            </view>

            <scroll-view className='container'>
                <text className='title'>Água Pura</text>
                <text className='title'>5608242145647</text>


                <view className='filter-container'>
                    <image src={filter} className='filter'/>
                </view>

                {products.map((product, index) => (
                    <view className='card-container' key={index}>
                        <view className='card-initial'>
                            <text className='initial'>{product.vendedor.charAt(0).toUpperCase()}</text>
                        </view>
                        <view className='card-content'>
                            <text className='name-product'>{product.vendedor}</text>
                            <text className='code-product'>Preço: {product.preco} Kz</text>
                        </view>
                        <view>
                            <image src={pencil} className='icon-pencil' />
                        </view>
                    </view>
                ))}
            </scroll-view>
        </page>
    )
}