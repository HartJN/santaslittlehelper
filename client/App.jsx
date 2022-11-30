import { Route, Routes } from 'react-router-dom'

import CreateEvent from './pages/CreateEvent'
import Dashboard from './pages/Dashboard'
import EventDetail from './pages/EventDetail'

function App() {
  return (
    <Routes>
      <Route path='/event' element={<CreateEvent />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/:event_id' element={<EventDetail />} />
    </Routes>
  )
}

export default App
