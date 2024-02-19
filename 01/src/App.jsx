
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import { Navigation } from './components/footer/navigation/Navigation'
import { TotalHome } from './components/footer/pagrindinis/TotalHome'
import { MultipleFields } from './components/forms/MultipleFields'
import { Comment } from './components/atsiliepimai/Comment'





function App() {
 

  return (
    <>
    <Navigation/>
    

 <Routes>
  <Route path='/pagrindinis' element={<TotalHome/>}/>
  <Route path='/registravimas' element={<MultipleFields/>}/>
  <Route path='/atsiliepimai' element={<Comment/>}/>
 </Routes>
 <Footer/>
    </>
  )
}

export default App
