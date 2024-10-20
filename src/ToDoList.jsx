import { useState } from "react";

function ToDoList() {

    const [tasks,setTasks] = useState([]);

    const handleAddTask = () => {
        const newtask = document.getElementById("task").value;
        document.getElementById("task").value="";
        setTasks(t => [...t,newtask])

    }
    const handleDeleteTsk = (index) => setTasks(t => t.filter((_,i) => i!==index ))

    const handleGoUp = (e) => {
        if(e.target.dataset.value>0){
        //let tempo2 = parseInt(e.target.dataset.value)
        //console.log("---------------",e.target.dataset.value)
        //console.log("---------------",e.target.dataset.value-1)
        setTasks(t => {
            let original =[...t];
            const tempo = original[parseInt((e.target.dataset.value)-1)]
            console.log("---------1-----------")
            console.log( original[parseInt(e.target.dataset.value)])
            console.log( original[parseInt((e.target.dataset.value)-1)] )
            console.log(tempo)
            original[parseInt((e.target.dataset.value)-1)] = original[parseInt(e.target.dataset.value)];
            original[parseInt(e.target.dataset.value)] = tempo
            console.log("_----------------2-------------")
            console.log( original[parseInt(e.target.dataset.value)])
            console.log( original[parseInt((e.target.dataset.value)-1)] )
            console.log(tempo)
            return original;        
        })


        }

            //console.log("tasks[i-1] = ",tasks[1])
            //console.log(e.target.dataset.value)
            //console.log(tasks[e.target.dataset.value])
            //console.log(e.target.parentNode.parentElement)
            //console.log(e.target)
            //console.log(e)


        }
        const handleGoDown = (e) => {
            const index = parseInt(e.target.dataset.value);
            if (index < tasks.length - 1) {
                setTasks(t => {
                    let original = [...t];
                    const temp = original[index];
                    original[index] = original[index + 1];
                    original[index + 1] = temp;
                    return original;
                });
            }
        };

    const list = tasks.map((task,index) => {
        return (
        <div key={index} className="list">
            <li key={index} className="task">{task}</li>
            <button className="delete" onClick={() => handleDeleteTsk(index)}>Delete</button> 
            <img onClick={handleGoUp} data-value={index} className="img" src="one.png" alt="up" />
            <img onClick={handleGoDown} data-value={index}  className="img" src="down.png" alt="down" />
            {console.log(index)}
        </div> )   ;
        
    })

    return(
        <div className="toDoList">
        <h1>To Do List</h1>
        <div className="inpandbtn">
        <input type="text" name="" id="task" placeholder="Enter a task"/> <button onClick={handleAddTask}>Add</button>
        </div>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {list}
        </ul>
        </div>
    );

}
export default ToDoList;