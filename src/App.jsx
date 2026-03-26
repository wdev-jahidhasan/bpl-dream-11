import { Suspense } from 'react'
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Players from './components/homepage/players/Players'
import Navbar from './components/navbar/Navbar'

const fetchPlayer = async () => {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
