import React, { Component } from 'react';
import Header from './Header';
import AddButton from './AddButton';
import CardContainer from './CardContainer';
import style from '../style/App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{id: 1, title: 'first', text: 'Random stuff that is on the paage.', color: '#B6ECD1'},
        {id: 2, title: 'second', text: 'More text goes here', color: '#B6ECD1'},
        {id: 3, title: 'third', text: 'to doooo', color: '#B6ECD1'}],
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

  addCard() {
    //find out what happens when you click 'apply' see if you can push into cards arr then
    // let newId = this.state.cards.length + 1;
    this.openSelectedCard({title: 'Untitled', text: 'Just start typing here.'});
    // this.state.cards.push('New Post It');
    // this.setState({
    //   cards: this.state.cards
    // }, () => )
  }

  createNewCard(cardInfo) {
    let newId = this.state.cards.length + 1;
    this.state.cards.push({id: newId, title: cardInfo.title, text: cardInfo.text, color: cardInfo.color});
    this.setState({
      cards: this.state.cards
    })
  }

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
