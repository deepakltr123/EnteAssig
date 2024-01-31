import "./loader.css";
import Gif from "../../assets/lGif.gif"

function Loader(){
  return (
    <div className="loader">
      <img style={{maxWidth:"50%"}} src={Gif.src} alt="loader"/>
    </div>
  )
}

export default Loader