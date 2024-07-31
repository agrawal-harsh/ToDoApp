import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import CreateTask from "./CreateTask";

function ToDo({taskList, onChange ,onAdd}){


    const [showCreateTask,setShowCreateTask] = useState(false);

    const unDoneTask = Object.keys(taskList).filter((key) => {if(taskList[key]){
        return key;
    }})

    function handleChange(task){
        console.log("old wali",taskList)
        const newTaskList = {...taskList , [task]:false}
        console.log("new wali",newTaskList)
        onChange(newTaskList);
    }

    return (
        <>
        <div className="">
            <h3 className="my-4 text-lg font-semibold">Things to do</h3>
            {unDoneTask.map((task)=>{
                return <div className="mt-1">
                <input type="checkbox" 
                checked = {false} 
                onChange={function(){
                    handleChange(task)
                }} className="w-6"/>
                <span>{task}</span></div>
            })}
        </div>
        {!showCreateTask && <button onClick = {function() {setShowCreateTask(true)}} className="flex items-center gap-3 border-2 border-yellow-500 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-3 py-1.5 rounded-full text-sm mt-4">
        <FaPlus />
        <span>Add a task</span>
        </button> || <CreateTask onCancel = {setShowCreateTask} onAdd = {onAdd}/>
        }
        </>
    )
}

export default ToDo;