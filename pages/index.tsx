import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useEffect,useState} from 'react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home({currUser,loggedIn}) {
  const router = useRouter()
  // if(!currUser){
  //   router.push('/userlogin')
  //   return <div>Not logged in</div>
  // }
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState("Hello")
  const [num, setNum] = useState(0)
  
  console.log(currUser,loggedIn)
  
  // useEffect(()=>{
  //   fetch('/checklogin')
  //   .then(r => r.json())
  //   .then(user => setUser(user))
  // },[])
  function handleSubmit(e) {
    console.log("submitting...")
    e.preventDefault();
    const data = {
      "name": username,
      "password": password
    }
    
    
    fetch("/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    .then(r => r.json())
    .then(user=>setUser(user))
    .then(() => {
      console.log("Pushing")
      router.push('/home')
    })

    
  }
  
  function handleLogout(e) {
    e.preventDefault();
    fetch("/logout",{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    router.push('/')
  }
  
  // function checktype(e) {
  //   e.preventDefault();
  //   fetch("/get_type")
  //   .then(r => r.json())
  //   .then(data => console.log(data))
  // }

  if (currUser) {
    return (
    <>
    <h2>Welcome, {currUser.name}!</h2>
      <form onSubmit={handleLogout}>
        <button type="submit">Logout</button>
      </form>
      
    </>
    );
  } else {
    
    return (
      <>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>password</p>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      </>
    )
  }
}
