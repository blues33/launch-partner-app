/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ProfileIndex from '../../components/ProfileIndex';
// import io from 'socket.io-client'
// import OAuth from '../../components/OAuth';

// const socket = io('http://localhost:3000/profiles/signup')
const providers = ['twitter', 'google', 'facebook', 'github']

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
        <ProfileIndex />
      </h1>
    );
  }
}
// {providers.map(provider =>
//   <OAuth
//   provider={provider}
//   key={provider}
//   socket={socket}
//   />
// )}
