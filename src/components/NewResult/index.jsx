import { Button, TextField } from '@mui/material'
import React from 'react'
import './styles/style.css'

export default function NewResult() {
  return (
    <div className='newresult__container'>
        <h1>New Result</h1>

        <TextField label="Questionaire ID"/>
        <TextField label="Answer 1"/>
        <TextField label="Answer 2"/>
        <TextField label="Answer 3"/>
        <TextField label="Answer 4"/>
        <Button className="submitBtn" type="submit">
        Submit
      </Button>
      <Button>Reset</Button>
    </div>
  )
}
