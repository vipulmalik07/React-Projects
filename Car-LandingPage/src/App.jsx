import { useEffect, useState } from "react"
import Background from "./Components/Background/Background"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"

const App = () => {
  let HeroData = [
    { Text1: "Dive into", Text2: "What you Love" },
    { Text1: "Indulge", Text2: "your Passions" },
    { Text1: "Give in to", Text2: "your passions" },

  ]

  const [heroCount, setHeroCount] = useState(0)
  const [playStatus, setPlayStatus] = useState(false)



  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count === 2 ? 0: count +1})
    }, 3000);
  },[])


  
  return (
    <div>

      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero setPlayStatus={setPlayStatus} HeroData={HeroData[heroCount]} heroCount={heroCount} 
      setHeroCount={setHeroCount} playStatus={playStatus}
      />
      

    </div>
  )
}

export default App