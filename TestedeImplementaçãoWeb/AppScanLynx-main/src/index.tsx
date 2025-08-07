import { root } from '@lynx-js/react'
import { RoutingProvider } from './Routes/routing'
import { Route } from './Routes/Route'
import { Home } from './Screens/Home'
import { ProductInfo } from './Screens/productInfo'
import { NewProduct } from './Screens/newProduct'
import { FoundProduct } from './Screens/foundProduct'

root.render(
  <RoutingProvider>
    <Route name="home"><Home /></Route>
    <Route name="info"><ProductInfo/></Route>
    <Route name="newProduct"> <NewProduct/></Route>
    <Route name="foundProduct"> <FoundProduct/></Route>
  </RoutingProvider>
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}