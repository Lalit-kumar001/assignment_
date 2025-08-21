import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Register(){
  const nav = useNavigate()
  const [form,setForm] = useState({
    name:'', phone:'', email:'', password:'', company:'', isAgency:true
  })
  const [loading,setLoading] = useState(false)
  const [err,setErr] = useState('')

  function upd(k,v){ setForm(prev=>({...prev, [k]:v})) }

  async function handleSubmit(e){
    e.preventDefault()
    setErr('')
    setLoading(true)
    try{
      const res = await fetch(`${API}/api/auth/register`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.message || 'Register failed')
      localStorage.setItem('popx_user', JSON.stringify(data.user))
      nav('/account')
    }catch(ex){
      setErr(ex.message)
    }finally{
      setLoading(false)
    }
  }

  const valid = form.name && form.email.includes('@') && form.password.length>=4

  return (
    <div>
      <div>
        <h1 className="h1">Create your<br/>PopX account</h1>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div>
          <div className="label">Full Name *</div>
          <input className="input" placeholder="Marry Doe" value={form.name} onChange={e=>upd('name', e.target.value)} />
        </div>
        <div>
          <div className="label">Phone number*</div>
          <input className="input" placeholder="9999999999" value={form.phone} onChange={e=>upd('phone', e.target.value)} />
        </div>
        <div>
          <div className="label">Email address*</div>
          <input className="input" placeholder="marry@doe.com" value={form.email} onChange={e=>upd('email', e.target.value)} />
        </div>
        <div>
          <div className="label">Password *</div>
          <input className="input" type="password" placeholder="••••••••" value={form.password} onChange={e=>upd('password', e.target.value)} />
        </div>
        <div>
          <div className="label">Company name</div>
          <input className="input" placeholder="Acme Inc" value={form.company} onChange={e=>upd('company', e.target.value)} />
        </div>

        <div>
          <div className="label">Are you an Agency?*</div>
          <div className="radio-group">
            <label className="radio">
              <input type="radio" checked={form.isAgency===true} onChange={()=>upd('isAgency', true)} />
              Yes
            </label>
            <label className="radio">
              <input type="radio" checked={form.isAgency===false} onChange={()=>upd('isAgency', false)} />
              No
            </label>
          </div>
        </div>

        {err && <div style={{color:'#b91c1c', fontSize:13}}>{err}</div>}
        <button className="btn btn-primary" disabled={!valid || loading}>
          {loading ? 'Please wait...' : 'Create Account'}
        </button>
      </form>
    </div>
  )
}
