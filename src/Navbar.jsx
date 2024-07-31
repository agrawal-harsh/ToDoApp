import React from 'react';
import { RiTodoLine } from "react-icons/ri";

function Navbar() {

  return (
    <>
    <div className = "px-4 py-4 flex items-center">
      <RiTodoLine className= "text-2xl text-yellow-500"/>
    <h1 className='text-lg font-semibold'>ToDoYourself</h1>
    </div>
    </>
  )
}

export default Navbar;
