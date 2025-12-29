import React from 'react'
import Card from './Card'
import Container from './Container'

const Section = () => {
    return (
        <section>
            <div className=' mt-[20px] w-full flex gap-4'>
                <Card customClass="bg-[#1E1E1E] " pClass="text-[#B0B0B0]" h3Class="text-[#B0B0B0] text-[20px]" visit="LEARN MORE" label="INDEPENDENCY" para="lorem em ipsum dolor, sissn doloremque lib" />
                <Card customClass="bg-[#1E1E1E]" pClass="text-[#B0B0B0]" h3Class="text-[#B0B0B0] text-[20px]" visit="LEARN MORE" label="UNIQUITY" para="lorem em ipsum dolor, sissn doloremque lib harash vanadaha " />
                <Card customClass="bg-[#1E1E1E]" pClass="text-[#B0B0B0]" h3Class="text-[#B0B0B0] text-[20px]" visit="LEARN MORE" label="QUALITY" para="lorem em ipsum dolloremque lib harash vanadaha " />
                <Card customClass="bg-[#1E1E1E]" pClass="text-[#B0B0B0]" h3Class="text-[#B0B0B0] text-[20px]" visit="LEARN MORE" label="SUSTAINABILITY" para="lorem em ipsum dolloremque lib harash vanadaha hi value hu mai  " />
            </div>
            <Container/>
        </section>
    )
}

export default Section