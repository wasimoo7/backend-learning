import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Enquiry from './EnquiryForm.jsx'
import './index.css'

import 'flowbite'// ✅ yahan hona chahiye

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Enquiry />
  </StrictMode>,
)