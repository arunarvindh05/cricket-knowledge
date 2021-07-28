import React from 'react'
import './Contact.css'

export const Contact = () => {
    return (
<div className="container">
  <div style={{display:'flex', justifyContent:'center'}}>
    <h2>Contact Us to Share Information</h2>
  </div>
  <div className="row">
    
    <div className="column">
      <form action="/action_page.php">
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label htmlFor="country">Country</label>
        <select id="country" name="country">
        <option value="india">India</option>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label>Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'170px'}}></textarea>
        <div style={{ display:'flex', justifyContent:'center' }}>
        <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  </div>
</div>
    )
}
