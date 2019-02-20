

export const fetchProfiles = () => {
  return fetch('http://localhost:3000/profiles/index').then(response => response.json());
};

export const createProfile = (userProfile) => {
  // console.log(userProfile)
  return fetch('http://localhost:3000/profiles/create', {
    method: 'post',
    body: JSON.stringify(userProfile)
  }).then(function(response) {
    return response.json();
  });
};
