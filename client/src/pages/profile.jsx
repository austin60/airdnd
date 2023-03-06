import ProfileNav from "../components/profileNav";
import { Paper } from "@mui/material";
import Property from "../components/property";


const Profile=(props)=>{
  const{userprops,handlePropertySearch}=props
    return(
        <div className="profile-page">
          <ProfileNav userprops={userprops} handlePropertySearch={handlePropertySearch}/>
         <Paper elevation={0}>
           <Property userprops={userprops}/>
         </Paper>
        </div>
    )
}
 export default Profile