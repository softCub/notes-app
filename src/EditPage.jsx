import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import dummy_notes from './dummy_notes.js';

function EditPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [note, setNote] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const foundNote = dummy_notes.find(note => note.id === parseInt(id));
    if (foundNote) {
      setNote(foundNote);
      setTitle(foundNote.title);
      setContent(foundNote.details);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleSave = () => {
    if (note && (title.trim() || content.trim())) {
      const noteIndex = dummy_notes.findIndex(n => n.id === note.id);
      if (noteIndex !== -1) {
        dummy_notes[noteIndex] = {
          ...dummy_notes[noteIndex],
          title: title.trim() || 'Untitled Note',
          details: content.trim(),
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };
      }
      navigate('/');
    }
  };

  const handleDelete = () => {
    if (note) {
      const noteIndex = dummy_notes.findIndex(n => n.id === note.id);
      if (noteIndex !== -1) {
        dummy_notes.splice(noteIndex, 1);
      }
      navigate('/');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(14, 13, 13, 0.945)',
        color: 'aliceblue'
      }}>
        <IconButton onClick={handleBack} sx={{ color: 'aliceblue' }}>
          <ArrowBackTwoToneIcon />
        </IconButton>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="outlined" 
            size='small' 
            sx={{ 
              padding:"1px", 
              minWidth:"30px",
              color: 'aliceblue',
              borderColor: 'aliceblue'
            }}
            onClick={handleDelete}
          >
            <DeleteIcon />
          </Button>
          <Button 
            variant="outlined" 
            size='small' 
            className='save' 
            sx={{ 
              padding:"1px", 
              minWidth:"30px",
              color: 'aliceblue',
              borderColor: 'aliceblue'
            }}
            onClick={handleSave}
          >
            <SaveIcon />
          </Button>
        </Box>
      </header>
      <section style={{ padding: '1rem', backgroundColor: 'rgba(14, 13, 13, 0.945)', minHeight: 'calc(100vh - 60px)' }}>
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="standard"
            InputProps={{
              style: { 
                color: 'aliceblue',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }
            }}
            sx={{
              '& .MuiInput-underline:before': {
                borderBottomColor: 'rgba(255, 255, 255, 0.3)'
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'aliceblue'
              }
            }}
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            multiline
            rows={15}
            placeholder='Start typing your note...'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            variant="standard"
            InputProps={{
              style: { 
                color: 'aliceblue',
                fontSize: '1rem'
              }
            }}
            sx={{
              '& .MuiInput-underline:before': {
                borderBottomColor: 'rgba(255, 255, 255, 0.3)'
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'aliceblue'
              }
            }}
          />
        </Box>
      </section>
    </>
  )
}

export default EditPage