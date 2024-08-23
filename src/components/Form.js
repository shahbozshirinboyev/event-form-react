import style from './Form.module.css'
// import { useState } from 'react';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form({ setShowModal, newEvent }) {

  // const [title, setTitle] = useState('');
  // const [date, setDate] = useState('');
  // const [location, setLocation] = useState('Navoiy');

  const title = useRef()
  const location = useRef('Navoiy')
  const date = useRef()

  const form = useRef()

  const resetForm = () => {

    // setDate('')
    // setTitle('')
    // setLocation('Navoiy')

    // title.current.value = ''
    // location.current.value = ''
    // date.current.value = ''

    form.current.reset()
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title.current.value,
      date: date.current.value,
      location: location.current.value,
      id: uuidv4()
    }
    newEvent(event)
    resetForm()
  }

  return (
    <>
      <form className={style['new-event-form']} onSubmit={handleSubmit} ref={form}>

        <h2>Enter your details</h2>

        <label>
          <span>Event title:</span>
          <input type="text" ref={title} />
        </label>

        <label>
          <span>Event date:</span>
          <input type="date" ref={date} />
        </label>

        <label>
          <span>Select location: </span>
          <select name="" id="" ref={location}>
            <option value="Navoiy">Navoiy</option>
            <option value="Buxoro">Buxoro</option>
            <option value="Samarqand">Samarqand</option>
            <option value="Namangan">Namangan</option>
          </select>
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
