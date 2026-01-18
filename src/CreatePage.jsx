import React, { useState } from 'react'
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import dummy_notes from './dummy_notes.js';

function CreatePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    if (title.trim() || content.trim()) {
      const newNote = {
        id: Math.max(...dummy_notes.map(note => note.id)) + 1,
        title: title.trim() || 'Untitled Note',
        details: content.trim(),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };
      
      dummy_notes.push(newNote);
      navigate('/');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

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

export default CreatePage