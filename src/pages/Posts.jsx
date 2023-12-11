import React, { useState } from 'react'

const Posts = () => {
    const [title,setTitle]= useState("")
    const [body, setBody] = useState("");
    const [device,setDevice] = useState("");

    const addPost = (e)=>{
        e.preventDefault();

        try {
            fetch(`https://adventurous-baseball-cap-dog.cyclic.app/posts/add`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                },
                body:JSON.stringify({
                    title,body,device
                })
            }).then((res)=>res.json()).then((data)=>{
                console.log(data);
            })
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <form onSubmit={addPost}>
            <input type="text"  placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text"  placeholder='body' value={body} onChange={(e)=>setBody(e.target.value)}/>
            <input type="text"  placeholder='device' value={device} onChange={(e)=>setDevice(e.target.value)}/>
          <button>Submite</button>

        </form>
    </div>
  )
}

export default Posts