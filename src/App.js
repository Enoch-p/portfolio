import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import Home from './components/Home'; // Corrected import path
import './components/styles/style.css'; // Adjusted the path based on your folder structure
import Homer from './components/Homer';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homer />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}





//linking of pages practices

// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Portfolio from './components/Portfolio'
// import About from './pages/about-us'


// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route index element={<Portfolio />} />
//         <Route path='/About' element={<About />} />
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
