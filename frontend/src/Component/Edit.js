import React, { useState } from 'react'
import axios from 'axios'

const Edit = (prop) => {
    const show=prop.props
    const id=prop.propdata._id
    console.log(id)

    const[title,setTitle]=useState("")

    const[desc,setDesc]=useState("")

    const editCard=()=>{
      axios.put(`http://localhost:5000/todo/putdata/${id}`,{title,desc}).then((d)=>{console.log(d)})
    }

  return (
    <div className='createTask' style={{display:show?"block":"none"}}>
        <form onSubmit={editCard}>
          <div>
            <label>Title:</label>
            <input type="text" className='taskInput' value={title} placeholder={prop.propdata.title} onChange={(d)=>{setTitle(d.target.value)}}/>
            </div>
            <div>
            <label>Description:</label>
            <input type="text" className='taskInput' value={desc} placeholder={prop.propdata.desc} onChange={(d)=>{setDesc(d.target.value)}}></input>
            </div>
            <button type='submit' className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Edit