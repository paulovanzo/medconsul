import '../styles/mainpage.css'
import { BsPersonCircle } from 'react-icons/Bs';
import { BiLogIn } from 'react-icons/Bi';


function Header() {
  
  return (
      <header>
        <div className='header-functions'>
            <div className='user-name'>
                <label id='name-user'> Nome do usuário </label>
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
