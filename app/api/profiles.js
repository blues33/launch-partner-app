export const fetchProfiles = () =>
  fetch('http://localhost:3000/profiles/index').then(response =>
    response.json(),
  );

export const createProfile = userProfile =>
  // console.log(userProfile)
  fetch('http://localhost:3000/profiles/create', {
    method: 'post',
    body: JSON.stringify(userProfile),
  }).then(response => response.json());
