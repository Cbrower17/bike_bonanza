import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect,useState} from 'react'

export default function App({ Component, pageProps }) {
  const [currUser, setcurrUser] = useState(null);
  const [loggedIn,setloggedIn] = useState(false)

  useEffect(()=>{
    fetch('/check')
    .then(r => r.json())
    .then(data => setloggedIn(data.logged_in))
  },[]);


  useEffect(()=>{
    fetch('/checklogin')
    .then(r => r.json())
    .then(data => setcurrUser(data))
  },[])


  return (
    <>
  <Component {...pageProps} currUser ={currUser} setcurrUser={setcurrUser} setloggedIn={setloggedIn} loggedIn={loggedIn}/>
    </>
  )
}

