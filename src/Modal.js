import React from 'react';
import Kadai_1 from './Kadai_1';
/* import './Modal.scss'; */

const Modal = ({ isOpen, close }) => {
  return (
    <React.Fragment>
    {
      isOpen ?
      <React.Fragment>
        <div className="Modal-overlay" onClick={close} />
        <div className="Modal">
          <p className="title">Modal Title</p>
          <div className="content">
            <p>
            {this.state.ca}
    	    </p>
          </div>
          <div className="button-wrap">
            <button onClick={close}>Confirm</button>
          </div>
        </div>
      </React.Fragment>
      :
      null}
    </React.Fragment>
  )
}

export default Modal;