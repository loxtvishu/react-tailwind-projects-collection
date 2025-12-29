import React from 'react'
import Nav from './Nav'
import ImageContainer from './ImageContainer'
import Section from './Section'
import NewSection from './NewSection'
import FooterSection from './FooterSection'

const App = () => {
  return (
    <main className=' px-7 py-7' >
      <Nav />
      <ImageContainer label="https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" />
      <Section />
      <NewSection />
      <FooterSection />
    </main>
  )
}

export default App