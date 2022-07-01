import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home/Home';

import Header from './Component/Header/Header';
import Signup from './Component/Signup/Signup';
import Login from './Component/Login/Login';
import CompleteTask from './Component/CompleteTask/CompleteTask';
import ToDoList from './Component/ToDoList/ToDoList';
import Calender from './Component/Calender/Calender';
import AddTask from './Component/AddTask/AddTask';


function App() {
  return (
    <div className="App">
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/completetask" element={<CompleteTask />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
       
      </Routes>
    </div>
  );
}

export default App;
