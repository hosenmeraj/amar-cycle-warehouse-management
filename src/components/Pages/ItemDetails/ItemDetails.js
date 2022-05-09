import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';
import './ItemDetails.css'

const ItemDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [item, setItem] = useState({})
    const [reload, setReload] = useState(true)
    useEffect(() => {
        const url = `https://mysterious-depths-40501.herokuapp.com/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [reload])

    //update restock
    const handleUpdateItem = event => {
        event.preventDefault()
        const newQuantity = event.target.quantity.value
        const { quantity } = item
        const updateQuantity = { quantity: (parseFloat(quantity) + parseFloat(newQuantity)).toString() }
        const url = `https://mysterious-depths-40501.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: "put",
            headers: {
                'content-Type': "application/json",
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                setReload(!reload)
                console.log('Success', data)
                alert('Restock SuccessFully')
            })
        event.target.reset()
    }

    //Deliver Quantity
    const handleDelivered = () => {
        const { quantity } = item
        const updateQuantity = { quantity: (parseFloat(quantity) - 1).toString() }
        const url = `https://mysterious-depths-40501.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: "put",
            headers: {
                'content-Type': "application/json",
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                setReload(!reload)
                console.log('Success', data)
                alert('Deliverd SuccessFully')
            })

    }
    return (

        <div className="container my-5">
            <div className="row border">
                <div className="col-md-6 col-12 py-2">
                    <img src={item?.img} alt="" style={{ width: "400px" }} />
                </div>
                <div className="col-md-6 col-12">
                    <h1>{item?.name}</h1>
                    <h1> ${item?.price}</h1>
                    <h4>Quantity : {item?.quantity}</h4>
                    <h5>Supplier : {item?.supplier}</h5>
                    <p>{item?.description}</p>
                </div>
            </div>
            <div className="row w-100 my-3">
                <div className='col-12 col-md-6 text-center'>
                    <form onSubmit={handleUpdateItem} className="d-flex my-3 md:w-3/4 lg:w-1/2 mx-auto">
                        <input name='quantity' className="form-control me-2 w-50" type="text" placeholder="Quntity" aria-label="Search" />
                        <button className="btn btn-outline-dark rounded-0">Restock</button>
                    </form>
                </div>
                <div className='col-12 col-md-3 text-center my-3'>
                    <button onClick={() => navigate('/manageitem')} className="btn btn-success font-semibold rounded">Manage Inventories</button>
                </div>
                <div className="col-12 col-md-3 my-3 text-center">
                    <button onClick={handleDelivered} className="btn btn-success rounded font-semibold ">
                        Delivered
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ItemDetails;