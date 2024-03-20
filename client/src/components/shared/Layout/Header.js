import { BiSolidDonateBlood } from "react-icons/bi";
import { RiLogoutCircleRFill } from "react-icons/ri";
import {FaUserCircle  } from "react-icons/fa";
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
const Header = () => {
    const {user} = useSelector(state=>state.auth)
    const navigate=useNavigate();
    const handlelogout=()=>{
       localStorage.clear();
       toast.success("Logout Successfully")
       navigate("/login")
    }
  return (
    <>
    <nav className='navbar'>
  <div className='container-fluid'>
<div className="navbar-brand"><BiSolidDonateBlood color='red' />RAKHT</div>
<ul className="navbar-nav flex-row">
  <li className="nav-item mx-3"><p className="nav-link"><FaUserCircle/>&nbsp;Welcome, {user?.name || user?.hospitalName || user?.organizationName} &nbsp; <span className="badge text-bg-secondary">{user?.role}</span></p></li>
  <li className="nav-item mx-3"><button className='btn btn-danger' onClick={handlelogout}>Logout&nbsp;<RiLogoutCircleRFill /></button></li>
  
  </ul>
    </div>
  </nav>
  </>
    
  )
}

export default Header
