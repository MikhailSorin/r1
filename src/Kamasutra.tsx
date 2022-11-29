import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    let task1 = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "React", isDone: true}
    ]
    let task2 = [
        {id: 1, title: "Terminator", isDone: false},
        {id: 2, title: "XXX", isDone: true},
        {id: 3, title: "Jentelmens of fortune", isDone: true}
    ]


    return (
        <div className="App">
            <Todolist title="what to learn" tasks={task1}/>
            <Todolist title="Movies" tasks={task2}/>

        </div>
    );
}


export default App;
