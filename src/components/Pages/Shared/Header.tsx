import '../../../App.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container-data'>
        <div className="nav-items">
        <div className="logo">
           <NavLink className="text-decoration-none" to="/"><p className='logo'>Logo</p></NavLink>
        </div>
        <div className="nav-data">
            <NavLink className='nav-item-data' to="/">Home</NavLink>
            <NavLink className='nav-item-data' to="/about">About</NavLink>
            <NavLink className='nav-item-data' to="/profile">Profile</NavLink>
            <NavLink className='nav-item-data' to="/services">Services</NavLink>
        </div>
        </div>
    </div>
  )
}

export default Header
