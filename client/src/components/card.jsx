import { Link } from "react-router-dom";
//import { DDB_URL } from "../url";

const Card=(props)=>{
        const{data}=props
    return(
      <>
      {
        data<1?<div>Loading...</div>:data.map(data=>(<div key={data._id} className="image-card">
          <Link to={`/${data._id}`}>
         <img src={data.file1} alt="house" />
         </Link>
         <div className="card-info">
          <div>
          <p><b>{data.host_adress},{data.country}</b></p>
          </div>
          <span>${data.price} night</span>
         </div>
      </div>))}
      
      </>
      
        
    )
}

export default Card;