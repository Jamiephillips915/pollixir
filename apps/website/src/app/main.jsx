import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import Router from './router.jsx'
import Route_Creator from './routes/Route_Creator/Route_Creator.jsx';

import './main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Router /> */}
    <Route_Creator />
  </StrictMode>,
)
