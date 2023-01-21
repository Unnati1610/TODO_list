import React from 'react'
import axios from "axios"



const Card = (prop) => {

  let delData=prop.props
  let edittask=prop.edittask
    const deleteTask=(id)=>{
        axios.delete(`http://localhost:5000/todo/deldata/${id}`).then((e)=>{console.log(e)}).then(()=>window.location.reload())
      }

    

  return (
    <div>
        <h1>{delData.title}</h1>
        <p>{delData.desc}</p>
        <button className="btn" onClick={()=>{edittask(delData)}} >edit</button>
        <button className="btn" onClick={()=>{deleteTask(delData._id)}}>delete</button>
    </div>

  )
}

export default Card