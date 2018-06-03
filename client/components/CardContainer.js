import React from 'react';
import Card from './Card';
import SelectedCard from './SelectedCard';
import DeleteMessage from './DeleteMessage';
import style from '../style/CardContainer.css';

const CardContainer = (props) => {
  return (
    <div className={style.cardContainer}>
      {props.cards.map((card, index) => (
        <Card
          card={card}
          key={card.id}
          index={index}
          openSelectedCard={() => props.openSelectedCard(card)} openDeleteCardWarning={props.openDeleteCardWarning}
        />
      ))}
      {props.cardSelected &&
        <div className={style.selectedCardComponentContainer}>
          <SelectedCard
            card={props.selectedCard}
            closeSelectedCard={props.closeSelectedCard}
            editExistingCard={props.editExistingCard}
            createNewCard={props.createNewCard}
          />
        </div>
      }
      {props.deleteMessage &&
        <div className={style.deleteMessageContainer}>
          <DeleteMessage
            closeDeleteCardWarning={props.closeDeleteCardWarning}
            deleteCard={props.deleteCard}
          />
        </div>
      }
    </div>
  );
};

export default CardContainer;
