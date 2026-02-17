import Dummy from './Pages/Dummy'
import { BrowserRouter ,Routes , Route, Link } from 'react-router-dom'
import FormsData from './Pages/FormsData'
import Layout from './Pages/Layout'

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>


        <Route path='/' element = {<Layout/>}/>
        <Route path="/dummy"  element={<Dummy/>}/>
        <Route path='/formdata' element={<FormsData/>}/>
          
        
     </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App



// import React from 'react'
// import Dummy from './Dummy'

// function App() {
//   return (
//     <div>
//       <Dummy/>
//     </div>
//   )
// }

// export default App
