import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
import React, { Suspense } from 'react'
import NotFound from './shared/NotFound'
import Loader from './shared/Loader'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Intro from './Intro/Intro'
import HomePage from './HomePage/HomePage'

const Home = React.lazy(() => import('./Home/Home'))

function App() {
  const location = useLocation()
  const isFalse = location.pathname.includes('404')
  return (
    <>
      {/* {isFalse || <Navbar />} */}
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<Navigate replace to='/404' />}></Route>
      </Routes>
      {/* </Suspense> */}
      {/* {isFalse || <Footer />} */}
    </>
  )
}

export default App
