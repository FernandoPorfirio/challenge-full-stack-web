// AuthService.js
import http from '@/services/http';

const AuthService = {
  async login(userData) {
    try {
      const response = await http.post('/auth', userData);
      console.log(response);
      return response.data;
    } catch (error) {
      throw new Error('Auth fail!');
    }
  },
};

export default AuthService;
