# PopX — Qualifier Task (React + Node/Express)

Pixel-perfect mobile UI centered on the page, built with **React (Vite)** and **React Router**, plus a small **Node/Express** backend for register/login. Matches the Adobe XD design flow:

1. Welcome
2. Login
3. Create Account
4. Account Settings

## Quick Start

### 1) Backend
```bash
cd server
npm install
npm start
# runs on http://localhost:5000
```

### 2) Frontend
```bash
cd client
npm install
# point frontend to backend (optional):
# echo "VITE_API_URL=http://localhost:5000" > .env
npm run dev
# open http://localhost:5173
```

> The frontend will work without a hosted backend if you only want to demo screens, but register/login needs the server.

## Deploy

### Frontend (Vercel or Netlify)
- **Vercel**: Import the `client` folder as a new project. Build command: `npm run build`, Output directory: `dist`.
- **Netlify**: Drag-and-drop `client/dist` after running `npm run build`, or connect repo. Build command: `npm run build`, Publish directory: `dist`.

### Backend (Render/Railway/Other)
- Create a Node web service from the `/server` folder repo.
- Start command: `npm start`.
- Set `PORT` environment variable (Render auto sets it).

Then set `VITE_API_URL` on your frontend host to the live backend URL and redeploy.

## Pixel Details

- Mobile frame 390×844, centered, soft shadow, light phone background.
- Inter font, bold headings, muted support text.
- Primary button: solid purple, secondary: light purple with purple text.
- Inputs with subtle purple focus ring, radio group like design.

## Repo Layout

```
popx-qualifier/
  ├─ client/     # React (Vite)
  └─ server/     # Express API (users saved in server/data/users.json)
```

## Routes

- `/` → Welcome
- `/login` → Login
- `/register` → Create Account
- `/account` → Account Settings (reads user from `localStorage`, logout clears it)

## Notes
- This is a demo auth; passwords are hashed using bcrypt and stored in a JSON file.
- For production, use a proper database & sessions/JWT.
