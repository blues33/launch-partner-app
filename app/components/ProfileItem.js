import React from 'react';

export const ProfileItem = ({profile}) => {
  return (
    <li className="profile-item">
      <div>name: {profile.name}</div>
      <div>description: {profile.description}</div>
    </li>
  );
};
