import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { useNavigate } from 'react-router-dom';
import dummy_notes from './dummy_notes.js'
import NoteItem from './NoteItem.jsx'
function Notes() {
  const navigate = useNavigate();

  return (
    <section>
        <header className='nheader'>
            <h2 >My Notes</h2>
            <input type="text" autoFocus placeholder='Search' />
            <button className='button-9'><SearchIcon /></button>
            
        </header>
        <div className="notes_ctn">
            {
                dummy_notes.map(note => (
                  <div className="note"><NoteItem key={note.id} content={note} /></div>
                ))
            }
            
        </div>
        <Fab 
          color='primary' 
          aria-label='add' 
          className='add'
          onClick={() => navigate('/create')}
        >
          <AddIcon />
        </Fab>
    </section>
  )
}

export default Notes
