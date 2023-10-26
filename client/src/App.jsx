import "./App.css"
import Footer from "./componets/footer/footer";
import Nav from './componets/nav/Nav'
import Nev from './componets/nev/nev'



import { Outlet } from "react-router-dom";
const App = () => {
 
  return (
    <div >
      <Nav />
      <Outlet />
  <Footer />
    
    </div>
  )
}

export default App