import React, { useState } from "react";
import ToDo from "./ToDo";
import Done from "./Done";



function GetDonePage(){

    const [taskList,setTaskList] = useState({"do the assignment":true , "clean my computer":false , "Buy a keyboard":true});

    function onChange(newTaskList){
        setTaskList(newTaskList)
        console.log(taskList)
    }
    

    return(
        <>
        <div className="px-4 mt-8">
            <h2 className="text-3xl font-bold ">Things to get done</h2>
            <ToDo taskList = {taskList} onChange= {onChange}/>
            <Done taskList = {taskList} onChange= {onChange}/>
        </div>
        </>
    )
}
export default GetDonePage;