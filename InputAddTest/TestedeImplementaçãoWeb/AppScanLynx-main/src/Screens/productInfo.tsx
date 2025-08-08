import '../Styles/App.css'
import { useNavigate } from '../Routes/useNavigate'
import { useState, useEffect } from '@lynx-js/react'
import pencil from '../assets/img/pencil.png'
import filter from '../assets/img/filter.png'
import { useContext } from '@lynx-js/react'
import { RoutingContext } from '../Routes/routing'
import { InMemoryOffersRepository } from '../infra/InMemoryOffersRepository'
import type { IOffersRepository } from '../Domain/IOffersRepository'
import type { Offer } from '../Domain/types'


export function ProductInfo({
    repo = new InMemoryOffersRepository(),
  }: {
    repo?: IOffersRepository;
  }) {

    const navigate = useNavigate()
    const { route } = useContext(RoutingContext);
    const { barcode, name } = route.params ?? {};

    const [offers, setOffers] = useState<Offer[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!barcode) return;
        const result = repo.getOffersByProductId(barcode);
        if (result instanceof Promise) {
            setLoading(true);
            result.finally(() => setLoading(false)).then(setOffers);
        } else {
            setOffers(result);
        }
    }, [barcode, repo])


    if (!barcode || !name) {
        return (
            <view className="container">
                <text>Produto não selecionado.</text>
                <view bindtap={() => navigate("home")}>
                    <text>Voltar</text>
                </view>
            </view>
        );
    }

    return(
        <page className='App'>
            <view className='Cabecalho'>
                <text className="name-logo" bindtap={() => navigate("home")} >APP-SCAN</text>
            </view>

            <scroll-view className='container'>

                <text className='title'>{name}</text>
                <text className='title'>{barcode}</text>


                <view className='filter-container'>
                    <image src={filter} className='filter'/>
                </view>

                {loading && <text>Carregando Ofertas...</text>}

                {offers.slice().sort((a, b) => a.price - b.price).map((offer, index) => (
                    <view className='card-container' key={index}>
                        <view className='card-initial'>
                            <text className='initial'>{offer.seller.charAt(0).toUpperCase()}</text>
                        </view>
                        <view className='card-content'>
                            <text className='name-product'>{offer.seller}</text>
                            <text className='code-product'>Preço: {offer.price.toLocaleString('fr-FR', { maximumFractionDigits: 2, minimumFractionDigits: 2 })} Kz</text>
                        </view>
                        <view>
                            <image src={pencil} className='icon-pencil' />
                        </view>
                    </view>
                ))}
                {offers.length === 0 && !loading && (
                    <text>Nenhuma oferta encontrada para este produto.</text>
                )}
            </scroll-view>
        </page>
    )
}