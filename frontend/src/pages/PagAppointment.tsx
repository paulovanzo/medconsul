import '../styles/mainpage.css'
import Header from '../components/Header'
import Schedule from '../components/Schedule';


function PagAppointment() {

  return (
    <><div className="head-main">
          <Header />
        </div>
        <div className='container-profile'>
            <div className='crumb'>
                <AiFillHome />
                <label> Home {'>'} </label>
                <Link to="/doctor"> Medico {'>'} </Link>
                <label> Perfil </label>
            </div>
            <div className='container-form'>
                <div className='form-profile'> 
                    <Form className='form'>
                        <Form.Group className="mb-3">
                            <Form.Label>Escolha o dia:</Form.Label>
                            <Form.Select>
                                <option>Domingo</option>
                                <option>Segunda</option>
                                <option>Terça</option>
                                <option>Quarta</option>
                                <option>Quinta</option>
                                <option>Sexta</option>
                                <option>Sabado</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </div>
            </div>    
        </div>
        </>
  )
}

export default PagAppointment
