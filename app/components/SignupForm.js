import React from 'react';
import SignupSection from './SignupSection';

class SignupForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
    console.log(this.state);
    // this.props.processForm(user).then(() => this.props.router.push('/'));
  }

  render() {
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
            <input type="submit" value="Sign Up"/>
          </form>
      </SignupSection>
    );
  }
}
// <p>{ this.props.errors[0] }</p>

export default SignupForm;
