import React, { Component } from 'react';
import Header from './Header';
import AddButton from './AddButton';
import CardContainer from './CardContainer';
import style from '../style/App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{id: 1, title: 'first', text: 'Random stuff that is on the paage.'},
        {id: 2, title: 'second', text: 'More text goes here'},
        {id: 3, title: 'third', text: 'to doooo'}],
      cardSelected: false,
      selectedCard: [],
      deleteMessage: false
    };
    this.addCard = this.addCard.bind(this);
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
    let newId = this.state.cards.length + 2;
    this.openSelectedCard({id: newId, title: 'Untitled', text: 'Just start typing here.'});
    // this.state.cards.push('New Post It');
    // this.setState({
    //   cards: this.state.cards
    // })
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

  openDeleteCardWarning() {
    console.log('CLICKED')
    this.setState({
      deleteMessage: true
    }, () => console.log(this.state))
  }

  closeDeleteCardWarning() {
    this.setState({
      deleteMessage: false
    })
  }

  deleteCard(index) {


    // THIS WORKS!!
    // console.log(this.state.cards[index])
    // this.state.cards.splice(index, 1);
    // this.setState({
    //   cards: this.state.cards
    // })
  }

  render() {
    return (
        <div className={style.appContainer}>
          <Header addCard={this.addCard}/>
          <CardContainer
            openSelectedCard={this.openSelectedCard}
            closeSelectedCard={this.closeSelectedCard}
            cards={this.state.cards}
            deleteCard={this.deleteCard}
            selectedCard={this.state.selectedCard}
            cardSelected={this.state.cardSelected}
            editExistingCard={this.editExistingCard} openDeleteCardWarning={this.openDeleteCardWarning} closeDeleteCardWarning={this.closeDeleteCardWarning}/>
        </div>
    );
  }
}

export default App;
