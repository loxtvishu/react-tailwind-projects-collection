import React from 'react'
import GetData from './Components/GetData'
import axios from 'axios'

const App = () => {
 async function getData() {
    let response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    console.log(response.data);

  }
  return (
    <>
      <button onClick={getData} className='rounded-2xl cursor-pointer text-[50px] m-4 border-4 p-4' >Get Data</button>
    </>
  )
}

export default App