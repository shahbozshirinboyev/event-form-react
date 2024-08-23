import style from './Form.module.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function Form({ setShowModal, newEvent }) {

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const resetForm = () => {
    setDate('')
    setTitle('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      id: uuidv4()
    }
    newEvent(event)
    resetForm()
  }

  return (
    <>
      <form className={style['new-event-form']} onSubmit={handleSubmit}>

        <h2>Enter your details</h2>

        <label>
          <span>Event title:</span>
          <input type="text" onChange={(e) => {setTitle(e.target.value)}} value={title} />
        </label>

        <label>
          <span>Event date:</span>
          <input type="date" onChange={(e) => {setDate(e.target.value)}} value={date} />
        </label>

        <button className={style['form-submit-btn']}><i class="bi bi-send"></i>Submit</button>
        &nbsp; &nbsp; &nbsp;
        <button className={style['form-reset-btn']} onClick={resetForm} type='button'><i class="bi bi-arrow-clockwise"></i> Reset</button>
        &nbsp; &nbsp; &nbsp;
        <button className={style['form-close-btn']} onClick={()=>{setShowModal(false)}} type='button'><i class="bi bi-x-lg"></i> Close</button>

      </form>
    </>
  )
}

export default Form
