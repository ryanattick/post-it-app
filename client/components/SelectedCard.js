import React, { Component } from 'react';
import style from '../style/SelectedCard.css';



class SelectedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      text: '',
      color: '#FAA8B0'
    };
    this.setColor = this.setColor.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.getEditChangesOnClick = this.getEditChangesOnClick.bind(this);
  }


  componentWillMount() {
    this.setState({
      id: this.props.card.id,
      title: this.props.card.title,
      text: this.props.card.text
    })
  }

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

  getEditChangesOnClick() {
    let p = new Promise((resolve, reject) => {
      if (!this.state.id) {
        this.props.createNewCard({title: this.state.title, text: this.state.text, color: this.state.color});
      }
      this.props.editExistingCard({id: this.state.id, title: this.state.title, text: this.state.text, color: this.state.color})
      resolve()
    }
    )
    .then(this.props.getEditChanges());
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
              <input type="text" value={this.state.title} onChange={this.handleTitleChange} className={style.cardTitleInput} placeholder={this.state.title}/>
            </label>
            <label>
              <input type="text" value={this.state.text} onChange={this.handleTextChange} className={style.cardTextInput} placeholder={this.state.text}/>
            </label>
          </form>
          <div className={style.buttonsContainer}>
            <div className={style.button} onClick={this.props.closeSelectedCard}>
              Cancel
            </div>
            <div className={style.button} onClick={this.getEditChangesOnClick}>
              Add
            </div>
          </div>
        </div>
    );
  }
}

export default SelectedCard;
