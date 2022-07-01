import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddTask.css';

const AddTask = () => {
     //----------- add item -------------
     const [products, setProducts] = useState();
     const [user,loading] = useAuthState(auth);

     const handleForm = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        
        const price = event.target.price.value;
        const description = event.target.description.value;
        const quantity = event.target.quantity.value;
        const suppliernam = event.target.suppliernam.value;
        const item = {email, name,  price, description, quantity, suppliernam };
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })

            .then(response => response.json())
            .then(data => setProducts(data));

            event.target.reset();

    }
    return (
        <div>
             {/* --------Add new item -------- */}

             <div className='form-center2'>
                <div>
                    <form className='form-control' onSubmit={handleForm}>

                        <h1 style={{ color: '#31c75e' }}>Add New Item</h1>
                        <span>Email</span>
                        <br />
                        <input type="email" name='email' className='input-feild' value={user.email} readOnly required />
                        <br />
                        <span> Project Name</span>
                        <br />
                        <input type="text" name='name' className='input-feild' required />
                        <br />

                        
                        <br />
                        <br />
                        <span>Duration</span>
                        <br />
                        <input type="text" name='price' className='input-feild' required />
                        <br />
                        <br />
                        <span>Description</span>
                        <br />
                        <input type="text" name='description' className='input-feild' required />
                        <br />
                        <br />
                        <span>Quality</span>
                        <br />
                        <input type="number" name='quantity' className='input-feild' required />
                        <br />
                        <br />
                        <span>Owner Name</span>
                        <br />
                        <input type="text" name='suppliernam' className='input-feild' required />
                        <br />
                        <br />
                        <button className='button-form'><span style={{ color: 'white' }}>Add Item</span></button>
                        <br />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddTask;