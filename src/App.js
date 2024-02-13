import { Routes, Route } from 'react-router-dom';
import Navbar from "./routes/nav-bar/nav-bar.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import SignIn from './routes/sign-in/sign-in.component';
import Cart from "./routes/cart/cart.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
