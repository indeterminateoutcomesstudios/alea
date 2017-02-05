export default function updateUser (firebase, action) {
  let user = firebase.auth.currentUser

  user.updateProfile({
    displayName: action.user.displayName
  })
    .then(() => {})
    .catch(e => console.error(e))
}