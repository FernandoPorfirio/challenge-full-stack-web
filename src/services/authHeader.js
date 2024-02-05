export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'))

  if (user && user.token) {
    const header = { authorization: `Bearer ${user.token}` }
    return { ...header }
  } else {
    return {}
  }
}
