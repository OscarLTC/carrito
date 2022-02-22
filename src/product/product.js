import { Link } from 'react-router-dom';
import './product.css';

export function Product(props) {

    return <div class="col">
        <div class="card shadow-sm">

            <img src={props.data.image} className="card-img-top product-image" />

            <div class="card-body">
                <p class="card-text">{props.data.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        {/* <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button> */}
                        <Link to={"/producto/" + props.data.id}> Ver</Link>
                    </div>
                    <small class="text-muted">9 mins</small>
                </div>
            </div>
        </div>
    </div >
}