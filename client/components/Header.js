import React from 'react';
import AddButton from './AddButton';
import style from '../style/Header.css';

const Header = (props) => {
  return (
    <div className={style.headerContainer}>
      Post It Note App
      <AddButton addCard={props.addCard}/>
    </div>
  );
};

export default Header;
