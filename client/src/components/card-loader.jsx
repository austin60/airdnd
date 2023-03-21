const Loader=()=>{
    return(
        <div className="image-card-loader">
           <div className="image-loader skeleton"></div>
           <div className="text-loader">
             <span className="location-loader skeleton"></span>
             <span className="cost-loader skeleton"></span>
           </div>
        </div>
    )
}
export default Loader;