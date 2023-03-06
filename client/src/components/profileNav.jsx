import Paper from '@mui/material/Paper';
import {FaAirbnb } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const ProfileNav=(props)=>{
    const{handlePropertySearch}=props
    return(
        <>
        <Paper  sx={{height:"5rem", alignContent:"center"}}>
          <div className='form-nav'>
            <div><NavLink to="/"style={{color:"black",textDecoration:"none"}}><FaAirbnb className="bar-icon"/></NavLink></div>
            <div className='profile-search'>
              <input type="text" placeholder='search location| title| price' onChange={handlePropertySearch} />
                
            </div>
            </div>
        </Paper>
        </>
    )
}
export default ProfileNav;