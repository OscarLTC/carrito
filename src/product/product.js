export function Product(props) {

    console.log(props.data);

    return <div class="col">
        <div class="card shadow-sm">

            <img src={props.data.image} />

            <div class="card-body">
                <p class="card-text">{props.data.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                </div>
            </div>
        </div>
    </div>
}