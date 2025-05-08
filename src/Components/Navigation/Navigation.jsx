import React from 'react'
import styles from './Navigation.module.css'
function Navigation() {
  return (
    <div >
        <nav className={`${styles.navigation} container`}>
            <div><img height={"50px"} width={"80px"}  src="/images/logo.png" alt="Logo" /></div>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
               
            </ul>
        </nav>
    </div>
  )
}

export default Navigation

