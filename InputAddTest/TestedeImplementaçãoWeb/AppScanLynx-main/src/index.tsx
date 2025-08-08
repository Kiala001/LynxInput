import { root } from '@lynx-js/react'
import { RoutingProvider } from './Routes/routing'
import { Route } from './Routes/Route'
import { Home } from './Screens/Home'
import { Scan } from './Screens/Scan'
import { ProductInfo } from './Screens/productInfo'
import { NewProduct } from './Screens/newProduct'
import ProductScreen from './NewScreens/productScreen'
import { ProductProvider } from './Routes/ProductContext'

root.render(
  <RoutingProvider>
    <Route name="home"><Home /></Route>
    <Route name="scan"><Scan /></Route>
    <Route name="info"><ProductInfo/></Route>
    <Route name="newProduct"> <NewProduct/></Route>
    <Route name="productScreen"> <ProductScreen/></Route>
  </RoutingProvider>
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}