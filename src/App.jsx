import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WebUnderConstruction from './components/WebUnderConstruction'
import NotFound from './components/NotFound'
import BekerIA from './components/BekerIA'
import './App.css'

function App() {
  return (
    <div className="w-full min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebUnderConstruction />} />
          <Route path="/ia" element={<BekerIA />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
