import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route index path='/' element={<Home />}>
      </Route>
    </Routes>

  );
}

export default App;
