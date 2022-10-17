import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '../visual/Pag1.css'
import Header from './Header'
import { AiFillHome } from 'react-icons/Ai';
import List from './ListPatient';


function PagPatient() {

  return (
    <><div className="head-main">
      <Header />
    </div>
    <List/>
    </>

  )
}

export default PagPatient
