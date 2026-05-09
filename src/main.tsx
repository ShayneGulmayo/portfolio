import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css'
import './index.css'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudySyncPage from './pages/StudySyncPage.tsx'

createRoot(document.getElementById('root')!).render(
  <MantineProvider>
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/studysync" element={<StudySyncPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
  </MantineProvider>
)
