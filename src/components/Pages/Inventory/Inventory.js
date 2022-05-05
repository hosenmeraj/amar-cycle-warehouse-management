import React from 'react';
import useItems from '../../../hooks/useItems';
import Item from '../Item/Item';
import './Inventory.css'

const Inventory = () => {
    const [items, setItems] = useItems()
    return (
        <div className='container my-3'>
            <div className='row'>
                <h1 className='text-center'>Our Items</h1>
                <div className='items'>
                    {
                        items.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventory;