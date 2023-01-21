
import { useEffect, useState } from 'react';
import './App.css';
import Create from './Component/Create';
import axios from "axios";
import Card from './Component/Card';
import Edit from './Component/Edit';


function App() {

  const url="http://localhost:5000/todo/showdata"

  const[taskData,settaskData]=useState(false)
  const showtask = ()=>{
    settaskData(true)

  }

  const [editD,seteditD]=useState("")



  const[editData,seteditData]=useState(false)
  const edittask = (d)=>{
    seteditData(true)
    seteditD(d)
  }


  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get(url).then((d)=>{setData(d.data)})
  },[])

console.log(data)





  return (
    <div className="App" style={{backgroundColor:(taskData || editData)?"rgba(178, 184, 184, 0.6)":"",height:"100vh"}}>
      
      <button onClick={()=>showtask()} className="btn" style={{opacity:(taskData || editData)?"0.1":"11"}}>Add task</button>
      
      <Create props={taskData}/>
      <Edit  props={editData} propdata={editD} />
      
      <div className='cards' style={{opacity:taskData?"0.1":"11"}} >
        {
          data.map((obj,inx)=><Card props={obj} key={inx} edittask={edittask}/>)
        }
        
      </div>
      
    </div>
  );
}

export default App;
