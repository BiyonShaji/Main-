import React, { useState } from "react";
// // import logo from './logo.svg';
import './App.css';
// // import { home } from "./home";
// // import { Login } from "./Login";
// import { Register } from "./Register";
import Popup from "./component/Popup";
// import { Navigate } from "react-router-dom";
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import { Login } from './component/Login';
import { Register} from './component/Register';

function clickme(){
  alert("HEllo IM Bayoon");
};
function App(){

 
//   // const [currentForm, setCurrentForm] = useState('Login');

//   // const toggleForm = (formName) => {
//   //   setCurrentForm(formName);
//   // }

//   // return (
//   //   <div className="App">
//   //     {
//   //       currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
//   //     }
//   //   </div>
//   // );
  
//   const [popup, setPop]=useState(false);
//   const handleClickopen=()=>{
//     setPop(!popup);
//   }
//   const closePopup=()=>{
//     setPop(false);
//   }
//   const [goToLogin,setGoToLogin]=React.useState(false);
//   if (goToLogin){
//     return <Navigate to="/login"/>
//   }
//   return(
//     <div className="App">
//       <div className="center"><button onClick={clickme} color="red">Home</button></div>

//        <div className="right">
//             <button onClick={handleClickopen}>Login/Sign Up</button></div>
//         <div>
//            { popup?
//         <div className="=main">
//           <div className="popup">
//             <div className="popup-header">
//               <h3>LOGIN</h3>
//               <h6   onClick={closePopup}>X</h6>
//             </div>
//             <div className="button">
//              <Router>
//             <Routes>
//              {/* <Route path="/" element={<Home/>}/>  */}
//             <Route path="/Login" element={<Login/>}/>
//             <Route path="/Register" element={<Register/>}/>  
//             </Routes>
//             </Router> 
       
//             <Navigate to="/Login"/>
//             <Link to='Login'><button onClick={()=>setGoToLogin(true)}>Login</button></Link>
//               <Navigate to="/Register"/>
//               <Link to='Register'><button onClick={()=>setGoToLogin(true)}>Register</button></Link>
               
//             <div/>
            
//           </div>
//           </div>
//         </div>:""}
//       </div>
//     </div>
//   );

// };


// export default App;
const [buttonPopup, setButtonPopup]=useState(false);
  return(
    <div className="homie" >
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Popup/>}/>
          <Route path="/Popup" element={<Login/>}/>
          <Route path="/Popup" element={<Register/>}/>
        </Routes>
     </Router>
    <main>
      <div className="center">
        <button onClick={clickme} color="red">Home
        </button>
      </div>   
      <div className="right"><button onClick={()=>setButtonPopup(true)}>Sign in/Sign up</button></div>
    </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      </Popup>
        
    </div>
    </div>  
  );
  
};


export default App;


