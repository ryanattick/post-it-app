import React from 'react';
import style from '../style/AddButton.css';

const AddButton = (props) => {
  return (
    <div className={style.addButtonContainer} onClick={props.addCard}>
      	&#43; Add Note
    </div>
  );
};


export default AddButton;
