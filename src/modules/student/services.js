import http from '@/services/http'
import authHeader from '@/services/authHeader';

class StudentService {
  getAllStudents() {
    console.log({ headers: authHeader() });
    return http.post('/student',{ headers: authHeader() }).then((response) => {
      return response.data
    })
  }

}

export default new StudentService()

