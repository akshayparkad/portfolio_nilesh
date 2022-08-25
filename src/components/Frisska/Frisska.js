import React, { useEffect, useState } from 'react'
import { Section5 } from '../Home/Section5/Section5'
import { Header } from './Header/Header'
import { Project1 } from './Project1/Project1'
import MoonLoader from "react-spinners/MoonLoader";


export const Frisska = () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);

  }, [])

  return (
    <>
      {
        loading ?
          <div className='spinner'>
            <MoonLoader
              size={60}
              color={"#2f2f2f"}
              loading={loading}
              speedMultiplier={1} />
          </div>
          :
          <div className='after-spinner'>
            <Header />
            <Project1 />
            <Section5 />
          </div>
      }

    </>

  )
}
