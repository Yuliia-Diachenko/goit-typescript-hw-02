import {RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader= () =>  {
  return (

    <div className={css.loader}>    
        <RotatingLines
        visible={true}
        width="50"        
        strokeWidth="5"
        strokeColor="purple"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"     
           
        />
    </div>
    
  );
}
export default Loader;