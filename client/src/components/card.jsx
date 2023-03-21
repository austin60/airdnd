import { Link } from "react-router-dom";
//import { DDB_URL } from "../url";
import Carousel from 'react-bootstrap/Carousel';
//import Loader from "./card-loader";<Loader/>
import Loaders from "./loaders";

const Card=(props)=>{
        const{data}=props
    return(
      <>
      {
        data<1?<div><Loaders/></div>:data.map(data=>(<div key={data._id} className="image-card">
          <Link to={`/${data._id}`}>
         {/*<img src={data.file1} alt="house" />*/}
         <div className="img">
         <Carousel interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100  image"
          src={data.file1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.file2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.file3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.file4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.file5}
          alt="Third slide"
        />
      </Carousel.Item>

    </Carousel>

         </div>
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