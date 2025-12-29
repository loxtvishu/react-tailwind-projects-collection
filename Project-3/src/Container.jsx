import React from 'react'
import Box from './Box'

const Container = () => {
  return (
    <div className='w-full mt-[20px] flex gap-4' >
        <Box para ="DESIGENERS" number = "150+" />
        <Box para ="CLIENTS" number = "500+"/>
        <Box para ="MASTERPIECES" number = "20K+"/>
        <Box para ="EVENTS" number = "50+"/>
    </div>
  )
}

export default Container