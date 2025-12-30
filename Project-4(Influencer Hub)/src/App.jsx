import Nav from './Nav'
import React from 'react'
import InfluencerGrid from './InfluencerGrid'

const App = () => {
  return (
    <main className='h-screen w-full bg-black text-white'>
      <Nav />
      <InfluencerGrid />
    </main>
  )
}

export default App