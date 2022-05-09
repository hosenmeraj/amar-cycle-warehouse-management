import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';

const ManageItem = () => {
    const navigate = useNavigate()
    const [inventorys, setInventorys] = useItems()
    useEffect(() => {
        fetch('https://mysterious-depths-40501.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventorys(data))
    }, [])

    const handleDelete = id => {
        const procced = window.confirm('Are you sure you want to delete this item?')
        if (procced) {
            console.log("delete id ", id)
            const url = `https://mysterious-depths-40501.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted')
                        const remaining = inventorys.filter(inventory => inventory._id !== id)
                        setInventorys(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <h2>Available inventory: {inventorys.length}</h2>
            <div className=''>
                {
                    inventorys.map(inventory => <div key={inventory._id}>{inventory.name}
                        {/* <Link to={`/update/${inventory._id}`}><button className='btn btn-success' >Update</button> </Link> */}
                        <button className='btn btn-danger ' onClick={() => handleDelete(inventory._id)}>
                            X
                        </button>
                    </div>)
                }
            </div>
            <br />
            <button onClick={() => navigate('/additem')} className='btn btn-success rounded'>AddItem</button>
        </div>
    );
};

export default ManageItem;