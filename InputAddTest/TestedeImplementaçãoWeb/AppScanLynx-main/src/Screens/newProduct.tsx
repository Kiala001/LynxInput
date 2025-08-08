import '../Styles/newProduct.css';

export function NewProduct () {
    return (
        <page className='Page'>
            <view>
                <view className='header-info'>
                    <text className='title'>Novo Produto</text>
                    <text className='info'>0103495838495902</text>
                </view>


                <view className='form'>
                    <view className='form-group'>
                        <text className='label'>Nome</text>
                        <input type='text' className='input-field' placeholder='Digite o nome do produto' />
                    </view>
                    <view className='form-group'>
                        <text className='label'>Vendedor</text>
                        <input type='text' className='input-field' placeholder='Digite o código de barras' />
                    </view>
                    <view className='form-group'>
                        <text className='label'>Preço</text>
                        <input type='number' className='input-field' placeholder='Digite o preço' />
                    </view>
                    
                    <view className='btn-submit'>
                        <text className='btn-text'>Adicionar Produto</text>
                    </view>
                </view>
            </view>
        </page>
    );
}