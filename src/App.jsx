/* eslint-disable no-unused-vars */
import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";


function App() {
  const [category, setCategory] = useState("")

  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App;
