import React from 'react';
import SignupSection from './SignupSection';
import { createProfile } from '../api/profiles';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      description: '',
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return event => this.setState({ [property]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    const history = this.props.history;
    // console.log(this.props)
    createProfile(this.state).then(result => {
      // this.props.updateUser(result);
      history.push('/');
    });
  }

  render() {
    // const { match, location, history } = this.props

    return (
      <SignupSection>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type="text"
              value={this.state.username}
              placeholder="username"
              onChange={this.update('username')} />
          </label>
          
          <label>Password
            <input
              type="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.update('password')} />
          </label>

          <label>Description
            <input
              type="text"
              value={this.state.description}
              placeholder="description"
              onChange={this.update('description')} />
          </label>
          <input type="submit" value="Sign Up"/>
        </form>
      </SignupSection>
    );
  }
}
// <p>{ this.props.errors[0] }</p>

export default SignupForm;
