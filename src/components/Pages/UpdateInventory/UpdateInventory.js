import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const { id } = useParams()
    const [inventorys, setInventorys] = useState({})
    useEffect(() => {
        const url = `https://mysterious-depths-40501.herokuapp.com/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventorys(data))
    }, [])


    const handleUpdate = event => {
        event.preventDefault()
        const name = event.target.name.value
        const quantity = event.target.quantity.value
        const supplier = event.target.supplier.value
        const price = event.target.price.value

        const updateInventory = { name, quantity, supplier, price }

        //fetch api post
        fetch(`https://mysterious-depths-40501.herokuapp.com/inventory/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateInventory),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Item added!!')
                event.target.reset()
            })

    }
    return (
        <div>
            <h2>Update Item: {inventorys.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" placeholder='name' required /><br />
                <input type="email" name="email" id="" placeholder='email' required /><br />
                <input type="text" name="quantity" id="" placeholder='Quantity' required /><br />
                <input type="text" name="supplier" id="" placeholder='Supplier' required /><br />
                <input type="number" name="price" id="" placeholder='Price' required /><br />
                <input type="submit" value="update Item" />
            </form>
        </div>
    );
};

export default UpdateInventory;