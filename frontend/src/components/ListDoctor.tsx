import '../styles/listpatient.css' 
import { useEffect, useState } from 'react'
import '../styles/pagpatient.css' 
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import api from "../utils/api"

type Doctor = {
    name: string,
    crm: string,
    phoneNumber: string,
    speciality: string,
}

function ListDoctor() { 
    const [isShown, setIsShown] = useState(true); 
    const [listDoctor, setListDoctor] = useState<Array<Doctor>>([]);

    async function fetchData(){
        api.get<Array<Doctor>>("http://localhost:8080/doctors").then((res) => { console.log(res.data); setListDoctor(res.data)})
    }

    useEffect(() => {
        fetchData()
    }, [])
    
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
                        {listDoctor && listDoctor.map((doctor) => { 
                            return (
                                <tr> 
                                    <td></td> 
                                    <td></td> 
                                    <td></td> 
                                    <td><div className='menu_tooltip'  onClick={handleClick} style={{ display:isShown ? 'block' : 'none' }}>:<div className='menu_tooltip_options'><p>editar</p><hr /><p>deletar</p></div></div></td> 
                                </tr>
                            )   
                        })}
                    </table> 
                </div> 
            </body> 
        </div> 
 
    ) 
} 

export default ListDoctor