import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '../visual/Pag1.css'
import { BsPersonCircle } from 'react-icons/Bs';
import { BiLogIn } from 'react-icons/Bi';


function Header() {
  
  return (
      <header>
        <div className='header-functions'>
            <div className='user-name'>
                <h2 id='name-user'> Nome do usuário </h2>
                <BsPersonCircle size={30} color={'FFFFFF'}/>
            </div>
            <div className='button-logout'>
                <BiLogIn size={30} color={'FFFFFF'}/>
             </div>
        </div>  
      </header>
  )
}

export default Header
