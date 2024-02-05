import http from '@/services/http'
import authHeader from '@/services/authHeader'
import { STUDENT_CREATE } from '@/constants/router'

import router from '@/router'

class StudentService {
  getAllStudents() {
    const headers = authHeader()
    return http.get('/student', { headers }).then((response) => {
      return response.data
    })
  }

  createStudent(student) {
    const headers = authHeader()

    if (student.id) {
      return http.put(`/student/${student.id}`, student, { headers }).then((response) => {
        sessionStorage.removeItem('student')
        return response.data
      })
    }
    return http.post('/student', student, { headers }).then((response) => {
      return response.data
    })
  }

  deleteStudent(id) {
    const headers = authHeader()

    return http.delete(`/student/${id}`, { headers }).then((response) => {
      sessionStorage.removeItem('student')
      return response.data
    })
  }

  updateStudent(student) {
    sessionStorage.setItem('student', JSON.stringify(student))
    router.push(STUDENT_CREATE.path)
  }
}

export default new StudentService()
