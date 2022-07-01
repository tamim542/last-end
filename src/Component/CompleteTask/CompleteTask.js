import React, { useEffect, useState } from 'react';

const CompleteTask = () => {
    const [brand,setBrand]=useState([])
    
        useEffect(()=>{
            fetch('http://localhost:5000/taskend')
            .then(res=>res.json())
            .then(data=>setBrand(data))
          },[])
    return (
        <div>
             <div class="row row-cols-1 row-cols-md-3 g-4">
  
            
  {

brand.map(project1=><div class="col"><div class="card h-100 border border-primary mt-2" style={{width: '18rem'}}>
      
       <div class="card-body">
         <h4 class="card-title" style={{color: 'blue'}}>{project1.projectname}</h4>
         <p class="card-text"><span style={{fontWeight:'bolder'}}>Project Name: </span>{project1.name}</p>
         <p class="card-text"><span style={{fontWeight:'bolder'}}>Duration: </span>{project1.price}</p>
         <p class="card-text"><span style={{fontWeight:'bolder'}}>Description: </span>{project1.description}</p>
         <p class="card-text"><span style={{fontWeight:'bolder'}}>Quality: </span>{project1.quantity}</p>
         <p class="card-text"><span style={{fontWeight:'bolder'}}>Owner Name: </span>{project1.suppliernam}</p>
        
         
       </div>
     </div>
     </div>
       
       
    

       )

  }
       
       </div>
        </div>
    );
};

export default CompleteTask;