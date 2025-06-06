import {Toaster} from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Institution from './pages/Institution'
import Client from './pages/Client'


function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/institution' element={<Institution/>}/>
        <Route path='client' element={<Client/>}/>
      </Routes>
    </div>
  )
}

export default App
