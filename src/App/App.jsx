import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Characters from './components/Characters'
import Watch from './components/Watch'
import Letters from './components/Letters'
import KnowMore from './components/KnowMore'

//Routes define as áreas que vamos colocar os nossos routes
//Route recebe o caminho em path. Se esse caminho for o mesmo do URL ele irá renderizar o que está dentro

const App = () => {

  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/letters' element={<Letters/>}/>
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/knowmore' element={<KnowMore/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App