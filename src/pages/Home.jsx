import React, { useEffect, useState } from 'react'

const Home = () => {
    const [posts, setPosts] = useState([]);



    const postsdata =()=>{
        try {
            fetch(`https://adventurous-baseball-cap-dog.cyclic.app/posts/add`,{
                method:"GET",
                headers:{
                    "Content-type":"application/json",
                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                }
            }).then((res)=>res.json()).then((data)=>{
                console.log(data);
                setPosts(data)
            })
            
        } catch (error) {
            console.log(error)
        }
    }
    const deletePost=(id)=>{
       fetch(`https://adventurous-baseball-cap-dog.cyclic.app/posts/delete/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json",
            "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
       }).then((res=>res.json)).then((data)=>{
        console.log(data)
        postsdata()
       })
    }

    useEffect(()=>{
        postsdata()
    },[])
  return (
    <div>
        {posts?.map((el)=>(
            <div key={el._id}>
                <p>{el.title}</p>
                <p>{el.body}</p>
                <p>{el.device}</p>
            <button onClick={()=>deletePost(el._id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default Home