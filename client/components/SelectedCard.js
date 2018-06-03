import React, { Component } from 'react';
import style from '../style/SelectedCard.css';

class SelectedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      text: '',
      color: ''
    };
    this.setColor = this.setColor.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.getEditChangesOnClick = this.getEditChangesOnClick.bind(this);
    this.clearTitleInput = this.clearTitleInput.bind(this);
    this.clearTextInput = this.clearTextInput.bind(this);
  }


  //Adds information for selected card to state
  componentWillMount() {
    this.setState({
      id: this.props.card.id,
      title: this.props.card.title,
      text: this.props.card.text,
      color: this.props.card.color || '#FAA8B0'
    })
  }

  //Clears the input field when someone first creates a new card
  clearTitleInput() {
    if (this.state.title === 'Untitled') {
      this.setState({
        title: ''
      })
    }
  }

  clearTextInput() {
    if (this.state.text === 'Just start typing here.') {
      this.setState({
        text: ''
      })
    }
  }

  //Captures changes in input fields as user types
  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  //Captures color the user wants to use for the card label
  setColor(event) {
    let color = event.target.id;
    if (color.includes('pink')) {
      this.setState({
        color: '#FAA8B0'
      })
    }
    if (color.includes('green')) {
      this.setState({
        color: '#B6ECD1'
      })
    }
    if (color.includes('orange')) {
      this.setState({
        color: '#FBDBAE'
      })
    }
    if (color.includes('blue')) {
      this.setState({
        color: '#AECCFB'
      })
    }
  }

  //Creates a new card or captures updates to an existing card
  getEditChangesOnClick() {
      if (!this.state.id) {
        this.props.createNewCard({title: this.state.title, text: this.state.text, color: this.state.color});
      }
      this.props.editExistingCard({id: this.state.id, title: this.state.title, text: this.state.text, color: this.state.color})
  }


  render() {
    return (
        <div className={style.selectedCardContainer}>
          <div className={style.colorBar} style={{backgroundColor: this.state.color}}></div>
          <div className={style.colorChoices}>
            <div className={style.color} id={style.pink} onClick={this.setColor}></div>
            <div className={style.color} id={style.green} onClick={this.setColor}></div>
            <div className={style.color} id={style.orange} onClick={this.setColor}></div>
            <div className={style.color} id={style.blue} onClick={this.setColor}></div>
          </div>
          <form>
            <label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.handleTitleChange}
                className={style.cardTitleInput}
                onClick={this.clearTitleInput}
              />
            </label>
            <label>
              <textarea
                type="text"
                value={this.state.text}
                onChange={this.handleTextChange}
                className={style.cardTextInput}
                onClick={this.clearTextInput}
              />
            </label>
          </form>
          <div className={style.buttonsContainer}>
            <div className={style.button} onClick={this.props.closeSelectedCard} id={style.cancelButton}>
              Cancel
            </div>
            {(this.state.title !== '' && this.state.text !== '') && (this.state.title !== 'Untitled') &&
              <div className={style.button} onClick={this.getEditChangesOnClick}>
                Add
              </div>
            }
            {(this.state.title === '' || this.state.text === ''|| this.state.title === 'Untitled') &&
              <div className={style.button} id={style.disabledButton}>
                Add
              </div>
            }
          </div>
        </div>
    );
  }
}

export default SelectedCard;
