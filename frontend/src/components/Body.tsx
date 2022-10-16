import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '../visual/Pag1.css'
import { AiFillHome } from 'react-icons/Ai';

function Body() {

    return (
        <div className='container-menu'>
            <div className='crumb'>
                <AiFillHome />
                <h3> home </h3>
            </div>
            <body className='body-menu'>
                <div className='menu'>

                    <div className='item-menu-patient'>
                        <div className='icon-item-menu'>
                            
                        </div>
                        <div>
                            <a href="">Paciente</a>

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
