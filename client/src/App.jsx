import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import signin from './pages/signin';

export default function App() {
  return <BrowserRouter >
    <Routes>
      <Route path='/' element={<Home />} />  
      <Route path='/sign-in' element={<signin />} />
      <Route path='/sign-up' element={<signup />} />
      <Route path='/about' element={<about />} />
      <Route path='/profile' element={<profile />} />
      
      
    </Routes>
    </BrowserRouter>
  
}
