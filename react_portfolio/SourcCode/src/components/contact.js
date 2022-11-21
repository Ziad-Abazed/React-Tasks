
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class contact extends Component {
    constructor(props) {
        super(props);

    }

   

    render() {
        return (
           
<div className="contact-page">

<div className="contact-info">
 <h1 className="titles">Do not hesitate,<br/>just make it work</h1>
 <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

 <i id="icon" className="fa fa-envelope-open"></i>
     <span>MAIL ME</span>
     <div className="mail-phone"> <p> ziad.w.abazedd@gmail.com</p></div>
    
     <i id="icon" className="fa fa-phone-square"></i>
     <span>call me</span>
    <div className="mail-phone"><p>+962-778098717</p></div> 
  
 
 </div>

<div className="contact-form">
 <form>
     <label for="myInput"></label>
     <input name="myInput" placeholder="YOUR NAME"/>
     <label for="myInput"></label>
     <input name="myInput" placeholder="YOUR MAIL"/>
     <label for="myInput"></label>
     <input name="myInput" placeholder="YOUR PHONE"/>
     <div>
         <label for="myInput"></label>
         <textarea name="myInput" placeholder="WRITE YOUR MESSAGE"></textarea>
         <a href="#" className="button">SEND </a>
     </div>
 </form>


</div>
</div>

        );
    }
}

contact.propTypes = {

};

export default contact;






























