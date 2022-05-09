import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import Item from '../Item/Item';
import './Inventory.css'

const Inventory = () => {
    const [items, setItems] = useItems()
    return (
        <div className='container my-3'>
            <div clas>
                <h1 className='text-center'>Our Items</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        items.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
                    }
                </div>
            </div>
            <Link to={'/manageinventory'}><button className='my-4 btn btn-primary'>Manage Inventory</button></Link>
        </div>
    );
};

export default Inventory;