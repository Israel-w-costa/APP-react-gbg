import "./index.css";

import Title from "./Components/Title/Index";
import Form from "./Components/Form/Index";

import { useState, useEffect } from "react";
import api from "./Service/api";


function App() {

  const [games, setGames] = useState([])

  async function getBanner() {
    const bannersFromApi = await api.get("/api/banner")
    setGames(()=>bannersFromApi.data)
  }
  async function deleteBanner(id) {
     await api.delete(`/api/banner/${id}`)
     getBanner()
  }

  useEffect(() => {
    getBanner()
    
  }, [])



  return (
    <div>
      <Title />
      <Form games={games} getBanner={getBanner} deleteBanner={deleteBanner} />
      
    </div>
  )
}

export default App;
