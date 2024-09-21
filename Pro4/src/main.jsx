import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Model from './components/Model'
import Model1 from './components/Model1';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Model />
    <Model1/>
  </StrictMode>,
)
