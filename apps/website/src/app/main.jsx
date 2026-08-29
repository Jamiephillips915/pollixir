import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Route_Creator from './routes/Route_Creator/Route_Creator.jsx';
import './main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Router /> */}
    <Route_Creator />
  </StrictMode>,
)
