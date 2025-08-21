// import { useNavigate } from 'react-router-dom'

// export default function Welcome(){
//   const nav = useNavigate()
//   return (
//     <div>
//       <div style={{marginTop:80}}>
//         <h1 className="h1">Welcome to PopX</h1>
//         <p className="p" style={{marginTop:8}}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         </p>
//       </div>

//       <div style={{marginTop:120, display:'flex', flexDirection:'column', gap:12}}>
//         <button className="btn btn-primary" onClick={()=>nav('/register')}>Create Account</button>
//         <button className="btn btn-secondary" onClick={()=>nav('/login')}>Already Registered? Login</button>
//       </div>
//     </div>
//   )
// }
// import { useNavigate } from 'react-router-dom'
// import './Welcome.css'

// export default function Welcome(){
//   const nav = useNavigate()
//   return (
//     <div className="welcome-container">
//       {/* Top Section */}
//       <div className="welcome-header">
//         <h1>Welcome to PopX</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
//       </div>

//       {/* Bottom Section */}
//       <div className="welcome-buttons">
//         <button className="btn btn-primary" onClick={()=>nav('/register')}>
//           Create Account
//         </button>
//         <button className="btn btn-secondary" onClick={()=>nav('/login')}>
//           Already Registered? Login
//         </button>
//       </div>
//     </div>
//   )
// }
// import { useNavigate } from 'react-router-dom'
// import './Welcome.css'

// export default function Welcome() {
//   const nav = useNavigate()

//   return (
//     <div className="phone">
//       <div className="phone-inner">
//         <div className="welcome">
//           <h1>Welcome to PopX</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
//         </div>

//         <div className="buttons">
//           <button className="btn btn-primary" onClick={() => nav('/register')}>
//             Create Account
//           </button>
//           <button className="btn btn-secondary" onClick={() => nav('/login')}>
//             Already Registered? Login
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
  const nav = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-bottom">
        {/* Heading & Paragraph */}
        <div className="welcome-header">
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>

        {/* Buttons */}
        <div className="welcome-buttons">
          <button
            className="welcome-btn primary"
            onClick={() => nav("/register")}
          >
            Create Account
          </button>
          <button
            className="welcome-btn secondary"
            onClick={() => nav("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
