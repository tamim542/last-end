import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Task = () => {
    //----------- add item -------------
    const [products, setProducts] = useState();
    const [user,loading] = useAuthState(auth);

    const {id} = useParams();
  
    const [users, setUser] = useState({});
    console.log('id for update page=',user);
    useEffect( () =>{
        const url = `http://localhost:5000/profileinfocollection/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    }, []);

    const handleForm = (event) => {
       event.preventDefault();
       const email = event.target.email.value;
       const name = event.target.name.value;
       
       const price = event.target.price.value;
       const description = event.target.description.value;
       const quantity = event.target.quantity.value;
       const suppliernam = event.target.suppliernam.value;
       const item = {email, name,  price, description, quantity, suppliernam };
       fetch('http://localhost:5000/complete', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(item)
       })

           .then(response => response.json())
           .then(data => setProducts(data));

           event.target.reset();

   }
   console.log('user===',user);
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
                        <input type="text" name='name' className='input-feild' value={users.name} required />
                        

                        
                        
                        <br />
                        <span>Duration</span>
                        <br />
                        <input type="text" name='price' className='input-feild' value={users.price} required />
                        <br />
                        
                        <span>Description</span>
                        <br />
                        <input type="text" name='description' className='input-feild' value={users.description} required />
                        <br />
                        
                        <span>Quality</span>
                        <br />
                        <input type="number" name='quantity' className='input-feild' value={users.quantity} required />
                        <br />
                        
                        <span>Owner Name</span>
                        <br />
                        <input type="text" name='suppliernam' className='input-feild' value={users.suppliernam} required />
                        <br />
                        
                        <button className='button-form'><span style={{ color: 'white' }}>Task completed</span></button>
                        <br />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Task;