import React from 'react';
import style from '../style/DeleteMessage.css';

const DeleteMessage = (props) => {

  return (
    <div className={style.deleteContainer}>
      <span>
        Delete Note
      </span>
      Are you sure you want to delete this note?
      <div className={style.buttonsContainer}>
        <div className={style.button} onClick={props.closeDeleteCardWarning}>
          Cancel
        </div>
        <div className={style.button} onClick={() => props.deleteCard()}>
          Delete
        </div>
      </div>
    </div>
  );
};


export default DeleteMessage;
