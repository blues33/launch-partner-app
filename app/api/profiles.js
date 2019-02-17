

export const fetchProfiles = () => {
  return fetch('http://localhost:3000/profiles/index').then(response => response.json());
  // return $.ajax ({
  //   method: 'GET',
  //   url: 'localhost:3000/profiles/index'
  // });
};
