import React from "react";

function CreateTask(){
    return(<>
    <div className="border-2 border-gray-100 mt-8 px-4 py-4 shadow-sm">
        <div className="text-xl font-semibold">Create a todo</div>
        <input className="w-full px-4 mt-4 border-2 border-gray-100 py-2 rounded-md" placeholder="Write an article about task"/>
        <button className="border-2 border-yellow-500 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-3 py-1.5 rounded-md text-sm mt-4" >Save</button>
        <button className="border-2 font-semibold px-3 py-1.5 rounded-md text-sm mt-4 ml-4" >Cancel</button>
    </div>
    </>)
}
export default CreateTask;