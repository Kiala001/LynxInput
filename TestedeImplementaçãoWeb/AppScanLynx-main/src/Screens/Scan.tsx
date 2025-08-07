import { useState } from 'react'
import { useNavigate } from '../Routes/useNavigate'
import '../Styles/App.css'
import '../Styles/Scan.css'


export function Scan() {

    {/*
    const [scannedCode, setScannedCode] = useState<string | null>(null)
    const navigate = useNavigate()

    interface ScanEvent {
        detail: {
            result: string;
        }
    }

    function handleScan(event: ScanEvent) {
        console.log('Código de barras lido:', event.detail.result)
        setScannedCode(event.detail.result)
    }

    function handleScanAgain() {
        setScannedCode(null)
    }

    function goBack() {
        navigate(-1) 
    }

    return (
        <page className='Scan'>
            <view className="Header">
                <text className="back-button" bindtap={() => navigate("home")}>&lt; Voltar</text>
                <text className="name-logo">SCAN</text>
                <view style={{ width: '50px' }} />
            </view>

            <scroll-view className='container'>
                {!scannedCode ? (
                    <view>
                        <text className='title'>Aponte para o código de barras</text>
                        <camera
                            mode="scan"
                            onscancode={handleScan}
                            style={{ width: '100%', height: '300px', marginTop: '20px', backgroundColor: '#000' }}
                        />
                    </view>
                ) : (
                    <view className='scan-result'>
                        <text className='title'>Produto Escaneado</text>
                        <text className='code-product-scanned'>{scannedCode}</text>
                        <view className='scan-again-button' bindtap={handleScanAgain}>
                            Escanear Novamente
                        </view>
                    </view>
                )}
            </scroll-view>
        </page>
    )
                */}
}

/*

import { useNavigate } from './useNavigate'
import './Scan.css'


export function Scan() {
    
    const navigate = useNavigate()

    

    return (
        <page className='Scan'>

            <view className="Header">
                <text className="name-logo">APP-SCAN</text>
            </view>

        </page>
    )
}

*/