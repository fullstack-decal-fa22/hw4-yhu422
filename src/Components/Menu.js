import React, { useState, useEffect } from 'react';
import Color from './Color';
import Block from './Block';
/* Add any imports you think you might need here! */

const Menu = (props) => { 

    return (
      <div>
      <div className="colorOptions">
          <Color handleClick = {props.handleClick} color="red" />
          <Color handleClick = {props.handleClick} color="pink" />
          <Color handleClick = {props.handleClick} color="blue" />
          <Color handleClick = {props.handleClick} color="green" />
      </div>
      </div>
    );
}

export default Menu;