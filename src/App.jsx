import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import ContactHeader from './Components/Contactheader/ContactHeader'
import ContactForm from './Components/ContactForm/ContactForm'
import Button from './Components/Button/Button'
function App() {


  return (
    <div>
    <Navigation/>
 <main className='main_container'>
 <ContactHeader/>
 <ContactForm/>
 </main>
    
   </div>
  )
}

export default App
