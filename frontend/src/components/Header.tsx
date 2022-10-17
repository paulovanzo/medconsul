import '../styles/mainpage.css'
import { BsPersonCircle } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';


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
