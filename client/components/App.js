import React, { Component } from 'react';
import Header from './Header';
import AddButton from './AddButton';
import CardContainer from './CardContainer';
import style from '../style/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      cardSelected: false,
      selectedCard: [],
      deleteMessage: false,
      indexToDelete: 0
    };
    this.addCard = this.addCard.bind(this);
    this.createNewCard = this.createNewCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.openSelectedCard = this.openSelectedCard.bind(this);
    this.closeSelectedCard = this.closeSelectedCard.bind(this);
    this.editExistingCard = this.editExistingCard.bind(this);
    this.openDeleteCardWarning = this.openDeleteCardWarning.bind(this);
    this.closeDeleteCardWarning = this.closeDeleteCardWarning.bind(this);
  }

  //Handles selected card modal
  openSelectedCard(card) {
    this.setState({
      cardSelected: true,
      selectedCard: card
    })
  }

  closeSelectedCard() {
    this.setState({
      cardSelected: false
    })
  }

  //Adds a new card to the screen, doesn't persist until user hits 'apply'
  addCard() {
    this.openSelectedCard({title: 'Untitled', text: 'Just start typing here.'});
  }

  //Creates new card persistant in the browser
  createNewCard(cardInfo) {
    let newId = this.state.cards.length + 1;
    this.state.cards.push({id: newId, title: cardInfo.title, text: cardInfo.text, color: cardInfo.color});
    this.setState({
      cards: this.state.cards
    })
  }

  //Edits a card that already exists
  editExistingCard(cardToEdit) {
    for (let i = 0; i < this.state.cards.length; i++) {
      if(this.state.cards[i].id === cardToEdit.id) {
        this.state.cards.splice(i, 1);
        this.state.cards.splice(i, 0, cardToEdit);
      }
    }
    this.setState({
      cards: this.state.cards
    }, () => {this.closeSelectedCard()})
  }

  //Handels delete warning modal
  openDeleteCardWarning(index) {
    this.setState({
      deleteMessage: true,
      indexToDelete: index
    })
  }

  closeDeleteCardWarning() {
    this.setState({
      deleteMessage: false
    })
  }

  //Deletes card when user confirms the action in modal
  deleteCard() {
    this.state.cards.splice(this.state.indexToDelete, 1);
    this.setState({
      cards: this.state.cards
    }, () => this.closeDeleteCardWarning())
  }


  render() {
    return (
        <div className={style.appContainer}>
          <Header addCard={this.addCard}/>
          {this.state.cards.length < 1 &&
            <div className={style.addNote}>
              Please add a new note to get started!
              <ion-icon name="arrow-round-up"></ion-icon>
            </div>
          }
          <CardContainer
            openSelectedCard={this.openSelectedCard}
            closeSelectedCard={this.closeSelectedCard}
            cards={this.state.cards}
            createNewCard={this.createNewCard}
            deleteCard={this.deleteCard}
            selectedCard={this.state.selectedCard}
            cardSelected={this.state.cardSelected}
            editExistingCard={this.editExistingCard} openDeleteCardWarning={this.openDeleteCardWarning} closeDeleteCardWarning={this.closeDeleteCardWarning}
            deleteMessage={this.state.deleteMessage}
          />
        </div>
    );
  }
}

export default App;
