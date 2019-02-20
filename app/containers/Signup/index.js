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
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import messages from './messages';
import Signupdiv from './Signupdiv';
import SignupForm from '../../components/SignupForm';

/* eslint-disable react/prefer-stateless-function */
export default class Signup extends React.PureComponent {
  render() {
    const SignupFormWithRouter = withRouter(SignupForm);
    return (
      <Signupdiv>
        <FormattedMessage {...messages.header} />
        <SignupFormWithRouter />
      </Signupdiv>
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
