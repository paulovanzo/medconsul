import '../styles/ListPatient.css' 
import { useState } from 'react'
import '../styles/PagPatient.css' 
import { AiFillHome } from 'react-icons/Ai';
import { Link } from 'react-router-dom';

function ListPatient() { 
    const [isShown, setIsShown] = useState(true); 
 
    const handleClick = event => { 
        setIsShown(current => !current); 
    }; 
 
    return ( 
        <div className='container-list'> 
            <div className='crumb'> 
                <AiFillHome /> 
                <Link to="/">Home > </Link>
                <label> Paciente</label> 
            </div> 
            <div className='filter-create'> 
                <input type="text" id='seach-patient' placeholder='Campo de busca' /> 
                <Link to="../patient/createNewPatiente"><button id='new-patient'>Cadastrar novo paciente</button></Link> 
            </div> 
            <body className='body-menu'> 
                <div className='list'> 
                    <table className='table_list'> 
                        <tr> 
                            <th>Nome</th> 
                            <th>CPF</th> 
                            <th>Telefone</th> 
                            <th>Genero</th> 
                        </tr> 
                        <tr> 
                            <td></td> 
                            <td></td> 
                            <td></td> 
                            <td><div className='menu_tooltip'  onClick={handleClick} style={{ display:isShown ? 'block' : 'none' }}>:<div className='menu_tooltip_options'><p>editar</p><hr /><p>deletar</p></div></div></td> 
                        </tr> 
                        <tr> 
                            <td></td> 
                            <td></td> 
                            <td></td> 
                            <td><div className='menu_tooltip'>:<div className='menu_tooltip_options'><p>editar</p><hr /><p>deletar</p></div></div></td> 
                        </tr> 
                        <tr> 
                            <td></td> 
                            <td></td> 
                            <td></td> 
                            <td><div className='menu_tooltip'>:<div className='menu_tooltip_options'><p>editar</p><hr /><p>deletar</p></div></div></td> 
 
                        </tr> 
                    </table> 
                </div> 
            </body> 
        </div> 
 
    ) 
} 
 
 
 
export default ListPatient