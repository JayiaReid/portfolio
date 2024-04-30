import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Overview, Navbar, Works, StarsCanvas} from './components'

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Overview/>
        </div>
        <About/>
        
        {/* <Tech/> */}
        <Works/>
        {/* <Experience/> */}
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact/>
        </div>
        <StarsCanvas/>
      </div>
    </BrowserRouter>
  )
}

export default App

// to add:
// projects, experiences etc.
// css button styling stuff 
// other animations?
