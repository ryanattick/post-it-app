import React, { Component } from 'react';
import style from '../style/Card.css';



class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: ''
    };
    this.editCard = this.editCard.bind(this);
  }

  componentWillMount() {
    this.setState({
      title: this.props.title,
      text: this.props.text
    })
  }

  editCard() {
    console.log('EDIT')
  }

  // WAS USING THIS ON CLICK TO DELETE BY INDEX
  // () => this.props.deleteCard(this.props.index)

  render() {
    return (
        <div className={style.cardContainer}>
          <div className={style.colorBar}></div>
          <div className={style.titleBar}>
            <div className={style.titleText}>
              {this.state.title}
            </div>
            <div className="icons">
              <ion-icon name="create" onClick={this.props.openSelectedCard}></ion-icon>
              <ion-icon name="trash" onClick={this.props.openDeleteCardWarning}></ion-icon>
            </div>
          </div>

          <div className={style.text}>
            {this.state.text}
          </div>
        </div>
    );
  }
}

export default Card;
