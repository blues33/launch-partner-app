export const fetchProfiles = () =>
  fetch('http://localhost:3000/profiles/index').then(response =>
    response.json(),
  );

export const createProfile = (userProfile) => {
  return fetch('http://localhost:3000/profiles/create', {
    method: 'post',
    body: JSON.stringify({name: userProfile.username, description: userProfile.description}),
    headers: { "Content-Type": "application/json" }
  })
}
