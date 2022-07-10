import React from 'react';

function Modal({ onClose, currentPhoto }) {

    const { name, category, description, index } = currentPhoto;

    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 data-testid="h3tag" className="modalTitle">{name}</h3>
          <img
          src={require(`../../assets/large/${category}/${index}.jpg`).default}
          alt="current category"
            />
          <p>
            {description}
          </p>
          <button type="button" data-testid="button" onClick={onClose}>
            Close this modal
          </button>
        </div>
      </div>
    );
  }
  
  export default Modal;