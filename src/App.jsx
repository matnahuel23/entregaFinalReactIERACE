import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import Error404 from './components/Error404/Error404';

function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider> 
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Todas nuestras películas'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Películas por categoria'}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer selected={true}/>}/>
            <Route path='/cart' element = {<Cart />} />
            <Route path='/checkout' element = {<Checkout />}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App