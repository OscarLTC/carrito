import { useEffect, useState } from "react";
import { Main } from "../layout/main";
import { Product } from "../product/product";

export function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json));

    }, []);

    return <>
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
    </>
}
