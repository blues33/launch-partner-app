import React from 'react';
import { ProfileItem } from './ProfileItem';
import { fetchProfiles } from '../api/profiles';

const ProfileItems = ({ profiles }) => {
  return (
  <ul>
    { profiles.map(profile => <ProfileItem key={profile._id} profile={ profile }/>) }
  </ul>
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
