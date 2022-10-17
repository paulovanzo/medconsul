import '../styles/mainpage.css'
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Body() {

    return (
        <div className='container-menu'>
            <div className='crumb'>
                <AiFillHome />
                <label> Home </label>
            </div>
            <body className='body-menu'>
                <div className='menu'>

                    <div className='item-menu-patient'>
                        <div className='icon-item-menu'>
                            
                        </div>
                        <div>
                            <Link to="/patient">Paciente</Link>

                        </div>
                    </div>

                    <div className='item-menu-doctor'>
                        <div className='icon-item-menu'>

                        </div>
                        <a href="">Médico</a>
                    </div>

                </div>
            </body>
        </div>

    )
}

export default Body
