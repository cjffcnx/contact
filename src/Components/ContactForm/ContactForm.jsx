import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import {MdMessage} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from "react-icons/hi"
const ContactForm = () => {

const onSubmit=(event)=>{
  event.preventDefault();
  console.log("name", event.target[0].value);
  console.log("email", event.target[1].value);
  console.log("text", event.target[2].value);
}


  return (
    <section className={`container ${styles.container}`}>
<div className={`${styles.contact_form}`}>
<div className={`${styles.top_btn}`}>
<Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={"24px"}/>}/>
<Button text="VIA CALL" icon={<FaPhoneAlt/>}/>
</div>
<Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail/>}/>


<form onSubmit={onSubmit}>
<div className={`${styles.form_control}`}>
<label htmlFor="name">Name</label>
<input type="text" name='name' />
</div>

<div className={`${styles.form_control}`}>
<label htmlFor="email">Email</label>
<input type="email" name='email' />
</div>

<div className={`${styles.form_control}`}>
<label htmlFor="message">Message</label>
<textarea className='msg'  type="text" name='message' rows="7"  />
</div>

<div style={{display:"flex", justifyContent:"end", marginBottom:"20px"}}>
<Button text="Submit" />
</div>
</form>




</div>
<div className={`${styles.contact_image}`} >
<img  src="images//customer.png" alt="Logo" />
</div>

    </section>
  )
}

export default ContactForm