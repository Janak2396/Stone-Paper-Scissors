import {ReactComponent as Rules} from '../images/image-rules.svg'
export  function Modal({ shown, close }) {
   
    return shown ? (
      <div
        className="modal-backdrop"
        onClick={() => {
          // close modal when outside of modal is clicked
          close();
        }}
      >
        <div
          className="modal-content"
          onClick={e => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        > 
        <div><Rules/></div>
          <button  className="rule-btn1" onClick={close}>Close</button>
        </div>
      </div>
    ) : null;
  }
