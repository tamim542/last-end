import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './ProjectList.css';

const ProjectList = () => {

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

    //add project---------------------------------------------------------------------
    const handleForm = (event) => {
        event.preventDefault();
        const projectname = event.target.projectname.value;
        const description = event.target.description.value;
        const category = event.target.category.value;
        const start = event.target.start.value;
        const end = event.target.end.value;
        const notes = event.target.notes.value;
       
        const item = {projectname, description, category, start, end, notes };
        console.log('item',item);
        const url='http://localhost:5000/project';
        console.log('url',url);
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })

            .then(response => response.json())
            .then(data => console.log(data));

            event.target.reset();

    }


    return (
        <div className='container'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  
            
       {

            project.map(project1=><div class="col"><div class="card h-100 border border-primary mt-2" style={{width: '18rem'}}>
           
            <div class="card-body">
              <h4 class="card-title" style={{color: 'blue'}}>{project1.projectname}</h4>
              <p class="card-text"><span style={{fontWeight:'bolder'}}>Description: </span>{project1.description}</p>
              <p class="card-text"><span style={{fontWeight:'bolder'}}>Category: </span>{project1.category}</p>
              <p class="card-text"><span style={{fontWeight:'bolder'}}>Start Date: </span>{project1.start}</p>
              <p class="card-text"><span style={{fontWeight:'bolder'}}>End Data: </span>{project1.end}</p>
              <p class="card-text"><span style={{fontWeight:'bolder'}}>Notes: </span>{project1.notes}</p>
              
            </div>
          </div>
          </div>
            
            
         

            )

       }
            
            </div>

              {/* --------Add new project -------- */}

              <div className='form-center2'>
                <div>
                <form className='form-control' onSubmit={handleForm}>

                        <h1 style={{ color: '#31c75e' }}>Add New Project</h1>
                        <span>Email</span>
                        <br />
                        <input type="email" name='email' className='input-feild' value={user.email} readOnly required />
                        <br />
                        <span> Project Name</span>
                        <br />
                        <input type="text" name='projectname' className='input-feild' required />
                        <br />
                        <span> Description</span>
                        <br />
                        <input type="text" name='description' className='input-feild' required />
                        <br />
                        <span> Category</span>
                        <br />
                        <input type="text" name='category' className='input-feild' required />
                        <br />
                        <span> Start Date</span>
                        <br />
                        <input type="text" name='start' className='input-feild' required />
                        <br />
                        <span> End Data</span>
                        <br />
                        <input type="text" name='end' className='input-feild' required />
                        <br />
                        <span>Notes</span>
                        <br />
                        <input type="text" name='notes' className='input-feild' required />
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

export default ProjectList;