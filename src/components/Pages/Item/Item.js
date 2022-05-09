import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';

const Item = ({ item }) => {
    const { name, supplier, quantity, description, img, price, _id } = item
    const navigate = useNavigate()
    console.log(name)
    const handleItemDetails = id => {
        navigate(`/inventory/${id}`)

    }
    return (
        <div>
            <div className="col">
                <div className="card ">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h3>Price: {price}</h3>
                        <p className="card-text">{description}.</p>
                        <p>Quantity: {quantity}.</p>
                        <p>Supplier: <small>{supplier}</small></p>
                    </div>
                    < button className='btn btn-primary w-50 mx-auto' onClick={() => handleItemDetails(_id)}>Manage</button >
                </div>
            </div>

        </div>
    );
};

export default Item;