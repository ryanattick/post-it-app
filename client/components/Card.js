import React, { Component } from 'react';
import style from '../style/Card.css';



class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      index: 0,
      color: ''
    };
  }

  componentWillMount() {
    this.setState({
      title: this.props.title,
      text: this.props.text,
      index: this.props.index,
      color: this.props.color
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title,
      text: nextProps.text,
      index: nextProps.index,
      color: nextProps.color
    });
  }


  render() {
    return (
        <div className={style.cardContainer}>
          <div className={style.colorBar} style={{backgroundColor: this.state.color}}></div>
          <div className={style.titleBar}>
            <div className={style.titleText}>
              {this.state.title}
            </div>
            <div className="icons">
              <ion-icon name="create" onClick={this.props.openSelectedCard}></ion-icon>
              <ion-icon name="trash" onClick={() => this.props.openDeleteCardWarning(this.state.index)} deleteCard={this.props.deleteCard}></ion-icon>
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
