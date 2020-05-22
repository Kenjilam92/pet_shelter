import React,{useEffect,useState} from "react"
import {Link,navigate} from "@reach/router"
import axios from "axios"
const Details = props => {
  const [pet,setPet]=useState({})
  const [skills,setSkills]=useState({})
  const fetchPet = () =>{
    axios.get(`http://localhost:8000/api/pets/${props.id}`)
      .then (res=>{
        res.data.errors?
        console.log(res.data.errors)
        :
        setPet(res.data)
      })
      .catch (err=>console.log(err))
  }
  
  useEffect(()=>{
    fetchPet();
  },[])
  
  const like = () => {
    const temp = pet.likes + 1
    axios.put(`http://localhost:8000/api/pets/update/${props.id}/like`,{"likes":temp})
      .then(res=>fetchPet())
      .catch(err=>console.log(err))
  }


  const adopt = id => {
    axios.delete(`http://localhost:8000/api/pets/delete/${id}`)
      .then(res=>{
        res.data.error?
        console.log(res.data.err)
        :
        navigate("/")
      })
      .catch(err=>console.log(err))
    props.refresh()
  }
  return(
    <>
    <h2>Details about: {pet.name}</h2>
    <Link to="/">Back to home </Link>
    <button className="btn btn-danger" onClick={e => adopt(pet._id)}> Adopt {pet.name} </button>
    <div className="border">
      <div className="row">
        <div className="col"><b>Pet type:</b></div>
        <div className="col"><p>{pet.type}</p></div>
      </div>
      <div className="row">
        <div className="col"><b>Description:</b></div>
        <div className="col"><p>{pet.desc}</p></div>
      </div>
      <div className="row">
        <div className="col"><b>Skills:</b></div>
        <div className="col">
          <p>{skills.skill_1}</p>
          <p>{skills.skill_2}</p>
          <p>{skills.skill_3}</p>
      </div>
      </div>
    <button className="btn btn-success" onClick={e=>like()}> Like </button>
    <p>{pet.name} has {pet.likes} {pet.likes>1? "likes" : "like"}</p> 
    </div>
    </>
  )
}

export default Details