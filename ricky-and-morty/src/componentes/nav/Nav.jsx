import { Link } from "react-router-dom"
import "./nav.css"
const nav = () => {
  return (
    <nav>
    <ul>
     <li> <Link to="">Home</Link></li>
      <li><Link to="/Galeria">Galeria</Link></li>
    
    </ul>
  </nav>
  )
}

export default nav