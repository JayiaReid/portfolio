import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Overview, Navbar, Works, StarsCanvas, Footer} from './components'
import Intro from "./components/Intro"
import { useState } from "react"

function App() {

  const [display, setDisplay] = useState(false)

  const openLaptop = () => {
    setDisplay(true);
};

const resetDisplay = ()=>{
    setDisplay(false);
}

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <Navbar display={display} setDisplay={setDisplay} />

        {display==false && 
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Overview open={setDisplay}/>
          
        </div>}
          
        
        {display && 
          <div className="content "> 

            <Intro/>
          <About/>
        
          {/* <Tech/> */}
          <Works/>
          {/* <Experience/> */}
          {/* <Feedbacks/> */}
          <div className="relative z-0">
            <Contact/>
          </div>
          <Footer close={resetDisplay}/>
          <StarsCanvas/>
          </div>
        }
        
      </div>
    </BrowserRouter>
  )
}

export default App

// to add:
// projects, experiences etc.
// css button styling stuff 
// other animations?
