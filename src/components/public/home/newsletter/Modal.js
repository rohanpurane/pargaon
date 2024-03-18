import React from 'react'
import './Newsletter.scss'

const Modal = ({props}) =>{
    console.log('closeModal:', props.closeModal, 'fkey:', props.fkey)
    return (
        <div className="container">
            <div className="modal-wrapper">
                <div className="modal-container card">
                    <div className="information" >
                        <h4 className="">पुरुष : १००२१</h4>
                        <h4 className="">महिला : १००२१</h4>
                        <h4 className="">विद्यार्थी : १००२१</h4>
                        <h4 className="">जेष्ठ नागरिक : १००२१</h4>
                        <button onClick={props.closeModal.closeModal} type="button" className='btn '>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal