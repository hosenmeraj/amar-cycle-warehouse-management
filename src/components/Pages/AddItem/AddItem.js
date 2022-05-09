import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddItem = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {

        console.log(data)
        // event.preventDefault()
        // const name = event.target.name.value
        // const email = event.target.email.value
        // const inventory = { name, email }

        //fetch api post
        fetch('https://mysterious-depths-40501.herokuapp.com/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Item added!!')

            })

    }
    return (
        <div className="w-50 mx-auto">
            <h1>Please add Item</h1>
            <form className="d-flex flex-column w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2" placeholder='Name' {...register("name")} />
                <textarea className="mb-2" placeholder='Description' {...register("description")} />
                <input className="mb-2" placeholder='email' type="email" {...register("email")} />
                <input className="mb-2" placeholder='Price' type="number" {...register("price")} />
                <input className="mb-2" placeholder='Quantity' type="number" {...register("quantity")} />
                <input className="mb-2" placeholder='Supplier' type="text" {...register("supplier")} />
                <input className="mb-2" placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value='Add Item' />
            </form>
        </div>
    );
};

export default AddItem;