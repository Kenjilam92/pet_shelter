import React,{useState,useEffect} from "react"
import axios from "axios"
import { navigate } from "@reach/router"

const FormEdit = props => {
  const [name,setName]=useState("")
  const [type,setType]=useState("")
  const [desc,setDesc]=useState("")
  const [skill1,setSkill1]=useState("")
  const [skill2,setSkill2]= useState("")
  const [skill3,setSkill3]=useState("")
  const [valid,setValid]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/pets/${props.id}`)
    .then(res=>{
      if (res.data.errors){
        console.log(res.data.errors)
      } 
      else{
        setName(res.data.name)
        setType(res.data.type)
        setDesc(res.data.desc)
        setSkill1(res.data.skills.skill_1)
        setSkill2(res.data.skills.skill_2)
        setSkill3(res.data.skills.skill_3)
      }
    })
    .catch(err=>console.log(err))
  },[props.id])


  const updatePet = e=>{
    e.preventDefault()
    const newInfo = {
      name: name,
      type: type,
      desc: desc,
      skills: { skill_1 : skill1,
                skill_2 : skill2,
                skill_3 : skill3
              }
    }
    axios.put(`http://localhost:8000/api/pets/update/${props.id}`, newInfo)
      .then (res => {
        res.data.errors?
        setValid(res.data.errors)
        :
        navigate("/")
        props.refresh()
      })
  }

  return(
    <form className="row" onSubmit={e=>updatePet(e)}>
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

        <button className="btn btn-success" 
                type="submit"> 
                Update 
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

export default FormEdit