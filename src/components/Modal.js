import style from './Modal.module.css'
import Form from './Form'

function Modal({setShowModal}) {
    console.log()
    return (
        <div className={style['modal-backdrop']}>
            <div className={style['modal']}>
                <Form setShowModal={setShowModal} />
            </div>
        </div>
    )
}

export default Modal
