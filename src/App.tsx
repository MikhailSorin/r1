import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


function App() {
    return <div
        className="app-wraper">
        <Header/>
        <Navbar/>
        {/*<Profile/>*/}
        <div className='app-wraper-content'>
        {/*<Dialogs/>*/}
            <Profile/>
        </div>
    </div>
}

export default App;

