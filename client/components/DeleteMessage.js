import React from 'react';
import style from '../style/DeleteMessage.css';

const DeleteMessage = (props) => {

  return (
    <div className={style.deleteContainer}>
      <span className={style.largeText}>
        Delete Note
      </span>
      <span className={style.smallText}>
        Are you sure you want to delete this note?
      </span>
      <div className={style.buttonsContainer}>
        <div className={style.button} onClick={props.closeDeleteCardWarning} id={style.cancelButton}>
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
