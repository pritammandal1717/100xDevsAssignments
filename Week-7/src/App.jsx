import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Assignment1 from './components/Assignment1'
import Assignment2 from './components/Assignment2'
import Assignment3 from './components/Assignment3'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assignment-1" element={<Assignment1
            name={"Jon Snow"}
            age={32}
            city={"Dragonstone"}
            followers={"80k"}
            likes={"803k"}
            photos={"1.4k"}
            profileImage={'profile.jpeg'}
            bannerImage={'banner.jpeg'}
          />} />
          <Route path="/assignment-2" element={<Assignment2 />} />
          <Route path="/assignment-3" element={<Assignment3 />} />
          {/* <Route path="/assignment-4" element={<Assignment4 />} /> */}
          {/* <Route path="/assignment-5" element={<Assignment5 />} /> */}
          {/* <Route path="/assignment-6" element={<Assignment6 />} /> */}
          {/* <Route path="/assignment-7" element={<Assignment7 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
