import style from './Form.module.css'

function Form({ setShowModal }) {
  return (
    <>
      <form className={style['new-event-form']}>
        <h2>Enter your details</h2>

        <label>
          <span>Event title:</span>
          <input type="text" />
        </label>

        <label>
          <span>Event date:</span>
          <input type="date" />
        </label>

        <button className={style['form-submit-btn']} type='submit'>Submit</button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button className={style['form-close-btn']} onClick={()=>{setShowModal(false)}} type='button'>Close</button>

      </form>
    </>
  )
}

export default Form
