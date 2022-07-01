import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const ToDoList = () => {
    const [user] = useAuthState(auth);


    const [project, setproject] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {

        const myProject = async () => {

            const email = user?.email;

            const url = `http://localhost:5000/projectcount?email=${email}`;
          

            const { data } = await axios.get(url)
            setproject(data);
           


        }
        myProject();






    }, [user])
    const navigateToInventory = id => {
        //console.log('id for update profile', id);
        const id1 = id.toString();
       // console.log('id for update profile one 1', id1);
        navigate(`updatemyinfo/${id1}`)
    }
    const navigateToCompleteTask = id => {
        //console.log('id for update profile', id);
        const id1 = id.toString();
       // console.log('id for update profile one 1', id1);
        navigate(`task/${id1}`)
    }

    return (
        <div style={{minHeight:'100vh'}}>
             <div class="row row-cols-1 row-cols-md-3 g-4">
  
            
  {

       project.map(project1=><div class="col"><div class="card h-100 border border-primary mt-2" style={{width: '18rem'}}>
      
       <div class="card-body">
         <h4 class="card-title" style={{color: 'blue'}}>{project1.projectname}</h4>
         <p class="card-text"><span style={{fontWeight:'bolder'}}>Project Name: </span>{project1.name}</p>
         <p class="card-text"><span style={{fontWeight:'bolder'}}>Duration: </span>{project1.price}</p>
         <p class="card-text"><span style={{fontWeight:'bolder'}}>Description: </span>{project1.description}</p>
         <p class="card-text"><span style={{fontWeight:'bolder'}}>Quality: </span>{project1.quantity}</p>
         <p class="card-text"><span style={{fontWeight:'bolder'}}>Owner Name: </span>{project1.suppliernam}</p>
         <button type="button" className="btn btn-primary" onClick={() => navigateToInventory(project1._id)}>Update Info</button>
         <button type="button" className="btn btn-primary ms-2" onClick={() => navigateToCompleteTask(project1._id)}>Complete Task</button>
         
       </div>
     </div>
     </div>
       
       
    

       )

  }
       
       </div>
        </div>
    );
};

export default ToDoList;