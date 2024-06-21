import React,{useState} from 'react'
import Collections from '../Components/Collections'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import {Gents,Ladies} from '../data'
import Womencollection from '../Components/Womencollection'


const Mainpage = () => {
    const [gentsfashion,setgentsfashion]=useState(Gents)
    const [ladiesfashion,setladiesfashion]=useState(Ladies)
  return (
    <div>
        <Header />
        <Banner/>
        <Collections gentsfashion={gentsfashion}/>
        <Womencollection ladiesfashion={ladiesfashion}/>
        <Footer />
    </div>
  )
}

export default Mainpage