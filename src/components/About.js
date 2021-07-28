import React from 'react'
import './About.css';

export const About = () => {
    return (
       <div className='html'>
            <div className="about-section">
  <h1>About Us Page</h1>
  <p>A website for study purpose</p>
  <p>To know and to level up to the world.</p>
</div>
<div style={{display:'flex', justifyContent:'center'}}>
  <h2>Myself</h2>
</div>
<div className="row" style={{display:'flex', justifyContent:'center'}}>
  <div className="column" style={{width:'500px'}}>
    <div className="card">
     
      <div className="container">
        <h2>Arunarvindh S</h2>
        <p className="title">Developer</p>
        
        <p>arunarvindh05@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  

  
</div> 
</div>
    )
}
