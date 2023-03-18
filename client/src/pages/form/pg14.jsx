import FinNav from "../../components/finNavbar";
import FileBase from 'react-file-base64';

const pg14=(props)=>{
  // const notify = () => toast("Wow so easy!");
  const{file1, file2,file3,file4, file5}=props
    return (
      <>
    <div className="page-content">
    <div className="image-page">
      <div className="page4-titles">
   
              <h1 className="page-content-title">
               Let's finish this
              </h1>
              <p className="page-content-desc">
                Upload photos of your space so potential guests can see
              </p>
          
             </div>
    <div className="image-display">
       <img src={file1} alt="" />
       <img src={file2} alt="" />
       <img src={file3} alt="" />
       <img src={file4}alt="" />
       <img src={file5} alt="" />
    </div>
    <FileBase type='file' multiple={false} onDone={props.getFiles('file1')} className="upload-btn" />
    <FileBase type='file' multiple={false} onDone={props.getFiles('file2')} />
    <FileBase type='file' multiple={false} onDone={props.getFiles('file3')} />
    <FileBase type='file' multiple={false} onDone={props.getFiles('file4')} />
    <FileBase type='file' multiple={false} onDone={props.getFiles('file5')} />
    <p id="notification"></p>
    </div>
    
    </div>
    <FinNav prevPage={props.prevPage}  finish={props.finish}/>
    </>
    )
}
export default pg14;