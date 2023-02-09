import React, { useState } from "react";
import './Popup.css';
// import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
function Popup(props){
    // const [goToRegister,setGoToRegister]=React.useState(false);
    //   if (goToLogin){
    //      return <Navigate to="/Register"/>
    //    }
    const [goToLogin,setGoToLogin]=useState(false);
      if (goToLogin){
         return <Navigate to="/Login"/>;
       }
       


    return(props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={()=>props.setTrigger(false)}>close</button>
                {/* <Link to="/login">Login</Link> */}
                <div> <button onClick={()=>{setGoToLogin(true);}}>{""}Login</button></div>
                {/* <button onClick={()=>{setGoToLogin(true);}}>{""}Login</button> */}
                {/* <div>
                    <Navigate to="/Register"/>
                <button > Sign Up</button>
                </div> */}
                {props.children}
                </div>
        <div>
        </div>
        </div>
    ):"";
}
export default Popup