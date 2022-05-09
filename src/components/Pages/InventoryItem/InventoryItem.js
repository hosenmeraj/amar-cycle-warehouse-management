// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const InventoryItem = () => {
//     const { id } = useParams()
//     const navigate = useNavigate()
//     const stockRef = useRef()

//     const [inventory, setInventory] = useState({})
//     useEffect(() => {
//         const url = `https://mysterious-depths-40501.herokuapp.com/inventory/${id}`
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setInventory(data))

//     }, [])


//     const handleManageItem = () => {
//         navigate('/manageitem')
//     }


//     const handleDeliverd = () => {
//         const updateStock = {
//             quantity: parseInt(inventory.quantity) - 1,
//             name: inventory.name,
//             description: inventory.description,
//             supplier: inventory.supplier,
//             img: inventory.img,
//             _id: inventory._id,
//         }
//         const url = `https://mysterious-depths-40501.herokuapp.com/inventory/${id}`
//         fetch(url, {
//             method: "PUT",
//             headers: {
//                 "content-type": "application/json",
//             },
//             body: JSON.stringify(updateStock)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log("success", data)
//                 setInventory(updateStock)
//                 alert('Restock SuccessFully')
//             })
//     }
//     const stockUpdate = event => {
//         event.preventDefault()
//         const newStock = stockRef.current.value
//         console.log(newStock)
//         const updateStock = {
//             quantity: parseInt(inventory.quantity) + parseInt(newStock),
//             name: inventory.name,
//             description: inventory.description,
//             supplier: inventory.supplier,
//             img: inventory.img,
//             _id: inventory._id,
//         }
//         const url = `https://mysterious-depths-40501.herokuapp.com/inventory/${id}`
//         fetch(url, {
//             method: "PUT",
//             headers: {
//                 "content-type": "application/json",
//             },
//             body: JSON.stringify(updateStock)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log("success", data)
//                 setInventory(updateStock)
//                 alert('Restock SuccessFully')
//             })

//     }
//     return (
//         <div className='container'>
//             <div className="single-item">
//                 <div className="single-image">
//                     <img src={inventory.img} alt="" style={{ width: "500px" }} />
//                 </div>
//                 <div className="singleItem-info">
//                     <h2>{inventory.name}</h2>
//                     <p>Id: {inventory._id}</p>
//                     <p> {inventory.description}</p>
//                     <p>Supplier Name: {inventory.supplier}</p>
//                     <p>price: {inventory.price}</p>
//                     <p>Quantity: {inventory.quantity}</p>


//                     <div className="input-field">
//                         <button onClick={() => handleDeliverd()}>Deliverd</button>
//                         <form onSubmit={stockUpdate}>
//                             <input ref={stockRef} type="number" name="added" id="" />
//                             <input type="submit" value="Add Stock" />
//                         </form>
//                         <button onClick={handleManageItem} className="btn_2">Manage Item</button>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default InventoryItem;