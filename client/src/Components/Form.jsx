import React,{useState} from "react"
import axios from "axios"
import { navigate } from "@reach/router"

const Form = props => {
  const [name,setName]=useState("")
  const [type,setType]=useState("")
  const [desc,setDesc]=useState("")
  const [skill1,setSkill1]=useState("")
  const [skill2,setSkill2]= useState("")
  const [skill3,setSkill3]=useState("")
  const [valid,setValid]=useState({})

  const addPet = e=>{
    e.preventDefault()
    const newPet = {
      name: name,
      type: type,
      desc: desc,
      skills: { skill_1 : skill1,
                skill_2 : skill2,
                skill_3 : skill3
              }
    }
    axios.post("http://localhost:8000/api/pets/new", newPet)
      .then (res => {
        res.data.errors?
        setValid(res.data.errors)
        :
        navigate("/")
        props.refresh()
      })
  }

  return(
    <form className="row" onSubmit={e=>addPet(e)}>
      <div className="col d-flex flex-column">
        <label htmlFor="name">Name:</label>
        <input  type="text" 
                onChange={e=>setName(e.target.value)} 
                value={name}
                placeholder={valid.name?valid.name.message:null}
                />
        
        <label htmlFor="type">Type:</label>
        <input  type="text" 
                onChange={e=>setType(e.target.value)} 
                value={type}
                placeholder={valid.type?valid.type.message:null}
                />

        <label htmlFor="desc">Description:</label>
        <input  type="text" 
                onChange={e=>setDesc(e.target.value)} 
                value={desc}
                placeholder={valid.desc? valid.desc.message:null}
                />

        <button className="btn btn-primary" 
                type="submit"> 
                Add pet 
        </button>
      </div>

      <div className="col d-flex flex-column">
        <p>Skills (optional):</p>
        <label htmlFor="skill1">Skill 1:</label>
        <input  type="text" 
                onChange={e=>setSkill1(e.target.value)} 
                value={skill1}
                // placeholder={valid}
                />

        <label htmlFor="skill2">Skill 2:</label>  
        <input  type="text" 
                onChange={e=>setSkill2(e.target.value)} 
                value={skill2}
                // placeholder={valid}
                />

        <label htmlFor="skill3">Skill 3:</label>  
        <input  type="text" 
                onChange={e=>setSkill3(e.target.value)} 
                value={skill3}
                // placeholder={valid}
                />
      </div>
    </form>
  )
}

export default Form