import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Login(){
  const nav = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const [err,setErr] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    setErr('')
    setLoading(true)
    try{
      const res = await fetch(`${API}/api/auth/login`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({email, password})
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.message || 'Login failed')
      localStorage.setItem('popx_user', JSON.stringify(data.user))
      nav('/account')
    }catch(ex){
      setErr(ex.message)
    }finally{
      setLoading(false)
    }
  }

  const valid = email.includes('@') && password.length>=4

  return (
    <div>
      <div>
        <h1 className="h1">Signin to your<br/>PopX account</h1>
        <p className="p" style={{marginTop:8}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <form className="form" onSubmit={handleSubmit} style={{marginTop:12}}>
        <div>
          <div className="label">Email Address</div>
          <input className="input" placeholder="Enter email address" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div>
          <div className="label">Password</div>
          <input className="input" type="password" placeholder="Enter password" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        {err && <div style={{color:'#b91c1c', fontSize:13}}>{err}</div>}
        <button className="btn" disabled={!valid || loading} style={{background: valid ? 'var(--purple)' : '#d1d5db', color:'#fff', marginTop:6}}>
          {loading ? 'Please wait...' : 'Login'}
        </button>
      </form>
    </div>
  )
}
