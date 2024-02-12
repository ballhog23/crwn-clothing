import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home/home.component";
import Navbar from "./routes/nav-bar/nav-bar.component";

const App = () => {
  const Shop = () => <h1>Shop page</h1>;

  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
