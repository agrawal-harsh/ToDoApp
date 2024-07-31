import React from "react";

function Done({taskList, onChange }){

    const unDoneTask = Object.keys(taskList).filter((key) => {if(!taskList[key]){
        return key;
    }})

    function handleChange(task){
        console.log("old wali",taskList)
        const newTaskList = {...taskList , [task]:true}
        console.log("new wali",newTaskList)
        onChange(newTaskList);
    }

    return (
        <>
        <div className="">
            <h3 className="my-4 text-lg font-semibold">Things Done</h3>
            {unDoneTask.map((task)=>{
                return <div className="mt-1">
                <input type="checkbox" 
                checked = {true} 
                onChange={function(){
                    handleChange(task)
                }} className="w-6"/>
                <span>{task}</span></div>
            })}
        </div>
        </>
    )
}
export default Done;