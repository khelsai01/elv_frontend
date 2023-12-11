import React, { useState } from 'react'

const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("");
    const [gender,setGender] = useState("");
    const [password,setPassword] = useState("");

    const register= (e)=>{

        e.preventDefault();
        const obj={
            name,email,gender,password
        }
         try {
            fetch(`https://adventurous-baseball-cap-dog.cyclic.app/users/register`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(obj)
            }).then(ress=>ress.json()).then(data=>console.log(data))

         } catch (error) {
            console.log(error)
         }
    }

  return (
    <div>
        <h2>User Register page</h2>
        <form onSubmit={register}>
            <input type="text" placeholder='username' value={name} onChange={(e)=>setName(e.target.value)} />
            <br/>
            <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
            <br/>

            <input type="text" placeholder='gender' value={gender} onChange={(e)=>setGender(e.target.value)}  />
            <br/>

            <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}  />
            <br/>
            <button>Register</button>


        </form>
    </div>
  )
}

export default Signup