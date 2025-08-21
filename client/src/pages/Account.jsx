import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Avatar({name='User'}){
  const initials = name.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase()
  return (
    <div style={{
      width:64,height:64,borderRadius:'50%',background:'linear-gradient(135deg, #7c3aed, #5b2ee6)',display:'grid',placeItems:'center',color:'#fff',fontWeight:700
    }}>{initials}</div>
  )
}

export default function Account(){
  const nav = useNavigate()
  const [user,setUser] = useState(null)

  useEffect(()=>{
    const u = localStorage.getItem('popx_user')
    if(!u){ nav('/login'); return }
    setUser(JSON.parse(u))
  },[])

  if(!user) return null

  return (
    <div>
      <h2 style={{fontSize:18, fontWeight:600, textAlign:'center'}}>Account Settings</h2>

      <div className="card" style={{marginTop:16}}>
        <div className="user">
          <Avatar name={user.name}/>
          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </div>

        <hr className="sep"/>

        <p className="desc">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div style={{marginTop:18, display:'flex', justifyContent:'center'}}>
        <button className="btn btn-secondary" onClick={()=>{ localStorage.removeItem('popx_user'); nav('/login') }}>Logout</button>
      </div>
    </div>
  )
}
