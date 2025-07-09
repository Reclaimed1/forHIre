import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing/Landing';
import Contact from './pages/contact/Contact';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
     
    </>
  )
}

export default App
