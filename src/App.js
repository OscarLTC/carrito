import './App.css';
import { Header } from './layout/header';
import { Main } from './layout/main';
import { Footer } from './layout/footer';
import { Product } from './product/product';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));

  }, []);

  return (
    <>
      <Header />
      <main>
        <Main />
        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {
                products.map(product => <Product data={product} />)
              }
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
