import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Nav.css'

function Nav() {
  const [name , setName] = useState("");

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY >100){
        setName("nav-b")
      }else{
        setName("nav")

      }

    })

    return ()=>{
      window.removeEventListener("scroll",null)
    }
  },[])




  return (
    <div className={name}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="logo"  className='nlogo'/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user" className='ulogo' />



    </div>
  )
}

export default Nav