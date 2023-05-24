import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'

function App(){
  return (
    <div className="App">
      <BrowserRouter>
      {/* ENVUELVO CONTEXT con el cartprovider */}
      <CartProvider> 
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Todas nuestras películas'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Películas por categoria'}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer selected={true}/>}/>
            <Route path='/cart' element = {<Cart />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;

/* comentario para 2da Preentrega REACT*/