// AuthService.js
import http from '@/services/http';

const AuthService = {
  async login(userData) {
      const response = await http.post('/auth', userData);
      return response.data;
  },
};

export default AuthService;
