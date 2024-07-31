import React, { useState,useEffect } from "react";
import ToDo from "./ToDo";
import Done from "./Done";



function GetDonePage(){


  const savedDataString = localStorage.getItem("taskList");
  const savedData = savedDataString ? JSON.parse(savedDataString) : {}

    const [taskList,setTaskList] = useState(savedData);

    function onChange(newTaskList){
        setTaskList(newTaskList)
        console.log(taskList)
    }

    function onAdd(task){
        const newTaskList = {...taskList,[task]:true};
        console.log(newTaskList);
        setTaskList(newTaskList);
    }

    useEffect(()=>{
      const TaskListString = JSON.stringify(taskList);
      localStorage.setItem("taskList",TaskListString)
    },[taskList])
    

    return(
        <>
        <div className="px-4 mt-8">
            <h2 className="text-3xl font-bold ">Things to get done</h2>
            <ToDo taskList = {taskList} onChange= {onChange} onAdd = {onAdd}/>
            <Done taskList = {taskList} onChange= {onChange}/>
        </div>
        </>
    )
}
export default GetDonePage;