import Header from "../components/Header"
import Main from "../components/Main"
import About from '../components/About'
import Price from "../components/Price"
import { apiKey } from "./api/data/data"
import { useEffect } from "react"


const Home = () => {
  
 
 
  async function fetsh (q: any) {
    const response = await fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify({q}),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await response.json()
    console.log(data);
    console.log(apiKey);
  }
  useEffect(() => {
    fetsh
  }, [apiKey])
  return (
    <>
      <button onClick={() => fetsh({q:1})}>QWEQWEQWE</button>
      <Header />
      <Main/>
      <About/>
      <Price/>
    </>
  )
}

export default Home