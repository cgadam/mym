import React, { Component } from 'react';

import './Floch.css';

import Header from '../../containers/HeaderContainer';
import Church from '../../containers/ChurchContainer';
import Salon from '../../containers/SalonContainer';
import Gifts from '../../containers/GiftsContainer';
import Confirmation from '../../containers/ConfirmationContainer';

class Floch extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Church/>
        <Salon/>
        <Gifts />
        <Confirmation />
      </div>
    );
  }
}

export default Floch;
