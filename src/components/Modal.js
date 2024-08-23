import style from './Modal.module.css'
import Form from './Form'

function Modal({ setShowModal, newEvent}) {
    console.log()
    return (
        <div className={style['modal-backdrop']}>
            <div className={style['modal']}>
                <Form setShowModal={setShowModal} newEvent={newEvent} />
            </div>
        </div>
    )
}

export default Modal
