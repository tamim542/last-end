import React, { useEffect, useState } from 'react';
import {  Link } from "react-router-dom";
const Home = () => {

  const [brand,setBrand]=useState([])
    
  useEffect(()=>{
      fetch('http://localhost:5000/taskend')
      .then(res=>res.json())
      .then(data=>setBrand(data))
    },[])
    return (
        <div>
          
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ibb.co/CMr3yds/industrial-park-factory-building-warehouse-1417-1939.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/k2yyRRL/industrial-park-factory-building-warehouse-1417-1932.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/swpdcn6/industrial-park-factory-building-warehouse-1417-1940.webp" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div class="row row-cols-1 row-cols-md-3 g-4 container m-5">
  
            
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

export default Home;