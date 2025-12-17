import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreatePage from './CreatePage'
import EditPage from './EditPage'
import Notes from './Notes'

function App() {
  return (
    <div>
      hi
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Notes/>} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/edit/:id' element={<EditPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App