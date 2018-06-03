import React, { Component } from 'react';
import Card from './Card';
import SelectedCard from './SelectedCard';
import DeleteMessage from './DeleteMessage';
import style from '../style/CardContainer.css';



class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selecedCard: [],
      cards: []
    };
    this.getEditChanges = this.getEditChanges.bind(this);
  }


  componentWillMount() {
    this.setState({
      cards: this.props.cards
    })
  }


//can possibly be deleted now that it's probably not needed
  getEditChanges() {
    this.setState({
      cards: this.props.cards
    })
  }


  render() {
    let cards = this.state.cards;

    return (
        <div className={style.cardContainer}>
          {cards.map((card, index) => (
            <Card card={card}
              key={card.id}
              index={index}
              title={card.title}
              text={card.text}
              color={card.color}
              openSelectedCard={() => this.props.openSelectedCard(card)} openDeleteCardWarning={this.props.openDeleteCardWarning}
            />
          ))}
          {this.props.cardSelected &&
            <div className={style.selectedCardComponentContainer}>
              <SelectedCard card={this.props.selectedCard} closeSelectedCard={this.props.closeSelectedCard} editExistingCard={this.props.editExistingCard}
              getEditChanges={this.getEditChanges}
              createNewCard={this.props.createNewCard}
              />
            </div>
          }
          {this.props.deleteMessage &&
            <div className={style.deleteMessageContainer}>
              <DeleteMessage closeDeleteCardWarning={this.props.closeDeleteCardWarning} deleteCard={this.props.deleteCard}/>
            </div>
          }
        </div>
    );
  }
}

export default CardContainer;
