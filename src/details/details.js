import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './details.css'

export function Details() {
    const [product, setProduct] = useState();
    let { id } = useParams();

    useEffect(() => {

        fetch('https://fakestoreapi.com/products/' + id)
            .then(res => res.json())
            .then(json => setProduct(json));

    }, []);

    if (product) {
        return <main>
            <div className="container">
                <div class="card mt-5">
                    <img src={product.image} className="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">
                            {product.title}
                        </h5>
                        <p class="card-text">
                            {product.description}
                        </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            Precio: {product.price} soles
                        </li>
                        <li class="list-group-item">
                            Category: {product.category}
                        </li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Añadir al carrito</a>
                        <a href="#" class="card-link">Agregar a favoritos</a>
                    </div>
                </div>
            </div>
        </main>
    } else{
        return <div>Cargando...</div>
    }


}