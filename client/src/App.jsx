////// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
////// Tools
import React,{useState,useEffect} from "react";
import {Router,Link,navigate} from "@reach/router"
import axios from "axios";
//////Components
import Table from "./Components/Table"
import Details from "./Components/Details"
import Form from  "./Components/Form"
import FromEdit from "./Components/FormEdit"
///////////////////////////////////////////////////
function App() {
  const [list,setList]=useState([]);
  const fetchPet = () =>{
    axios.get(`http://localhost:8000/api/pets/`)
      .then (res=>{
        res.data.errors?
        console.log(res.data.errors)
        :
        setList(res.data)
      })
      .catch (err=>console.log(err))
  }

  useEffect(()=>{
    fetchPet()
  },[])

  return (
    <>
      <h1>Pet Shelter</h1>
      <Router>
      <Table list={list} path="/" refresh={fetchPet}/>
      <Details path="/pets/:id" refresh={fetchPet}/>
      <Form path="/pets/new" refresh={fetchPet}/>
      <FromEdit path="/pets/:id/edit" refresh={fetchPet}/>
      </Router>
    </>
  );
}

export default App;
