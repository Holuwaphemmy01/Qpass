import {Toaster} from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Institution from './pages/Institution'


function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/institution' element={<Institution/>}/>
      </Routes>
    </div>
  )
}

export default App
