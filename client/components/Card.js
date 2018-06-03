import React from 'react';
import style from '../style/Card.css';

const Card = (props) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.colorBar} style={{backgroundColor: props.card.color}}></div>
      <div className={style.titleBar}>
        <div className={style.titleText}>
          {props.card.title}
        </div>
        <div className="icons">
          <ion-icon name="create" onClick={props.openSelectedCard}></ion-icon>
          <ion-icon name="trash" onClick={() => props.openDeleteCardWarning(props.index)} deleteCard={props.deleteCard}></ion-icon>
        </div>
      </div>
      <div className={style.text}>
        {props.card.text}
      </div>
    </div>
  );
};

export default Card;
