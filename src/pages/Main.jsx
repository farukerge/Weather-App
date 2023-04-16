import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Form from '../components/Form/Form'
import Card from '../components/Card/Card'

const Main = () => {
   

  return (
    <div className='w-full  h-screen bg-gray-700 text-white flex flex-col justify-center items-center bg-gradient-to-r from-linear1 to bg-linear2'> 
        <Header />
        <Form />
        <Card />
    </div>
  )
}

export default Main