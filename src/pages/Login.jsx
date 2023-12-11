import React, { useState } from 'react'

const Login = () => {

    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const login= (e)=>{

        e.preventDefault();
        const obj={
            email,password
        }
         try {
            fetch(`https://adventurous-baseball-cap-dog.cyclic.app/users/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(obj)
            }).then(ress=>ress.json()).then((data)=>{
                console.log(data)
                localStorage.setItem("token",data.token)
            })

         } catch (error) {
            console.log(error)
         }
    }

  return (
    <div>
        <h2>User login page</h2>
        <form onSubmit={login}>

            <br/>
            <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
            <br/>
        
            <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}  />
            <br/>
            <button>Login</button>


        </form>
    </div>
  )
}

export default Login