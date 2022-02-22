import './App.css';
import { Home } from './home/home';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Details } from './details/details';
import { Cart } from './cart/cart';
import { Layout } from './layout/layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="producto/:id" element={<Details />} />
          <Route path="canasta" element={<Cart />} />
        </Route>
      </Routes >
    </>
  );
}

export default App;
