const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const dataDir = path.join(__dirname, 'data');
const usersFile = path.join(dataDir, 'users.json');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(usersFile)) fs.writeFileSync(usersFile, JSON.stringify([]));

function readUsers(){
  return JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
}
function writeUsers(users){
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

app.get('/', (_,res)=>res.json({ok:true, service:'popx-server'}));

app.post('/api/auth/register', async (req,res) => {
  try{
    const { name, phone='', email, password, company='', isAgency=true } = req.body || {};
    if(!name || !email || !password){
      return res.status(400).json({message:'Missing required fields'});
    }
    let users = readUsers();
    if(users.find(u=>u.email===email)){
      return res.status(409).json({message:'Email already registered'});
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
      id: Date.now().toString(36),
      name, phone, email, passwordHash, company, isAgency: !!isAgency
    };
    users.push(user);
    writeUsers(users);
    const { passwordHash:_, ...safe } = user;
    res.status(201).json({ user: safe });
  }catch(e){
    console.error(e);
    res.status(500).json({message:'Server error'});
  }
});

app.post('/api/auth/login', async (req,res) => {
  try{
    const { email, password } = req.body || {};
    if(!email || !password) return res.status(400).json({message:'Missing email/password'});
    const users = readUsers();
    const user = users.find(u=>u.email===email);
    if(!user) return res.status(401).json({message:'Invalid credentials'});
    const ok = await bcrypt.compare(password, user.passwordHash);
    if(!ok) return res.status(401).json({message:'Invalid credentials'});
    const { passwordHash:_, ...safe } = user;
    res.json({ user: safe });
  }catch(e){
    console.error(e);
    res.status(500).json({message:'Server error'});
  }
});

app.get('/api/user/:id', (req,res)=>{
  try{
    const users = readUsers();
    const user = users.find(u=>u.id === req.params.id);
    if(!user) return res.status(404).json({message:'Not found'});
    const { passwordHash:_, ...safe } = user;
    res.json({ user: safe });
  }catch(e){
    res.status(500).json({message:'Server error'});
  }
});

app.listen(PORT, ()=>{
  console.log('popx-server running on port', PORT);
});
