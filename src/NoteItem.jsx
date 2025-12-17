import React from 'react'
import { Link } from 'react-router-dom'

function NoteItem({content}) {
  console.log(content.title.substr(0,40));
  return (
    <>
    <Link to={`/edit/${content.id}`} className='note'>
    
    <h4>{content.title.length >40 ? content.title.substr(0,40)+"...":content.title}</h4>
    <p>
     {content.details.length >200 ? content.details.substr(0,200)+"...":content.details} 
    </p>
    </Link>
    </>
  )
}

export default NoteItem