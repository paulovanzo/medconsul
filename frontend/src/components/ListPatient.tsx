import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '../visual/PagPatient.css'
import { AiFillHome } from 'react-icons/Ai';
import { AiOutlineSearch } from 'react-icons/Ai';


function ListPatient() {

    return (
        <div className='container-list'>
            <div className='crumb'>
                <AiFillHome />
                <h3> Home > </h3>
                <h3> Paciente</h3>
            </div>
            <div className='filter-create'>
                <input type="text" id='seach-patient' placeholder='Campo de busca' />
                <button id='new-patient'>Cadastrar novo paciente</button>
            </div>
            <body className='body-menu'>
                <div className='list'>
                    
                </div>
            </body>
        </div>

    )
}

export default ListPatient
