import React from 'react';
import { ProfileItem } from './ProfileItem';
import { fetchProfiles } from '../api/profiles';
import Ul from './Ul';

const ProfileItems = ({ profiles }) => {
  return (
  <Ul>
    { profiles.map(profile => <ProfileItem key={profile._id} profile={ profile }/>) }
  </Ul>
  );
};

class ProfileIndex extends React.Component{

  constructor(props) {
    super(props);
    this.state = {profiles: []};
  }

  componentDidMount() {
    fetchProfiles().then(profiles => {
      this.setState({profiles: profiles})
    });
  }

  render() {
    if (this.state.profiles === undefined || this.state.profiles.length === 0) {
      return (<div></div>);
    } else {
      return (
        <section className="profile-index-section">
          <ProfileItems profiles={ this.state.profiles } />
        </section>
      );
    }
  }
}

export default ProfileIndex;
