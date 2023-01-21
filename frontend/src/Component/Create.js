import React, { useState } from 'react'
import axios from 'axios';

const Create = (prop) => {
    const show=prop.props;
    const url="http://localhost:5000/todo/postdata"

    const[title,setTitle]=useState("")

    const[desc,setDesc]=useState("")

    console.log(title)
    console.log(desc)
    
    const postCard=()=>{
        axios.post(url,{title,desc}).then(()=>{console.log("card posted")})
    }

  return (
    <div className='createTask' style={{display:show?"block":"none"}}>
        <form onSubmit={postCard}>
          <div>
            <label>Title:</label>
            <input type="text" className='taskInput' value={title} onChange={(d)=>{setTitle(d.target.value)}}/>
            </div>
            <div>
            <label>Description:</label>
            <input type="text" className='taskInput' value={desc} onChange={(d)=>setDesc(d.target.value)}></input>
            </div>
            <button type='submit' className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Create
