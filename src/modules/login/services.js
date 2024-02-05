import http from '@/services/http'

class AuthService {
  login(user) {
    return http.post('/auth', user).then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
  }

  logout() {
    localStorage.removeItem('user')
  }
}

export default new AuthService()
