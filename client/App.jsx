import { Route, Routes } from 'react-router-dom'

import CreateEvent from './pages/CreateEvent'
import Dashboard from './pages/Dashboard'
import Drinks from './pages/Drinks'
import EventDetail from './pages/EventDetail'
import GalleryPage from './pages/GalleryPage'
import Home from './pages/Home'
import InvitePage from './pages/InvitePage'
import Wishlist from './pages/Wishlist'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/event' element={<CreateEvent />} />
      <Route path='/dashboard' element={<Dashboard />} />

      <Route path='/peets' element={<GalleryPage />} />
      <Route path='/dashboard/:event_id' element={<EventDetail />} />

      <Route path='/drinks' element={<Drinks />} />
      <Route path='/wishlist/:guest_code' element={<Wishlist />} />
      <Route path='/invite/:invite_code' element={<InvitePage />} />
    </Routes>
  )
}

export default App
