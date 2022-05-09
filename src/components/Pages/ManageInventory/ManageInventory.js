import React from 'react';
import useItems from '../../../hooks/useItems';
import Item from '../Item/Item';

const ManageInventory = () => {
    const [items, setItems] = useItems()
    return (
        <div>


            <div className='container my-3'>
                <div className='row'>
                    <h1 className='text-center'>Our Items</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            items.map(item => <Item key={item._id} item={item}></Item>)
                        }
                    </div>
                </div>
                {/* <Link to={'/manageinventory'}><button>Manage Inventory</button></Link> */}
            </div>

        </div>
    );
};

export default ManageInventory;