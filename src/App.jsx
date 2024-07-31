import React from 'react'
import Navbar from './Navbar';
import GetDonePage from './GetDonePage';

function App() {

  return (
    <div className = "flex flex-col items-center">
      <div className=' m-0 p-0  w-full  md:max-w-6xl'>
        <Navbar />
      </div>
      <hr className = "w-screen"/>
      <div className=' m-0 p-0  w-full  md:max-w-6xl'>
        <GetDonePage/>
      </div>
      </div>
  )
}

export default App
