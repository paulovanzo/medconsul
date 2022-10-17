import '../styles/listpatient.css' 
import { useState } from 'react'
import '../styles/pagpatient.css' 
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function ListDoctor() { 
    const [isShown, setIsShown] = useState(true); 
 
    const handleClick = () => { 
        setIsShown(!isShown)
    }
 
    return ( 
        <div className='container-list'> 
            <div className='crumb'> 
                <AiFillHome /> 
                <Link to="/">Home {'>'} </Link>
                <label>Doctor</label> 
            </div> 
            <div className='filter-create'> 
                <input type="text" id='search-doctor' placeholder='Campo de busca' /> 
                <Link to="/doctor/createNewDoctor"><button id='new-doctor'>Cadastrar novo médico</button></Link> 
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

export default ListDoctor