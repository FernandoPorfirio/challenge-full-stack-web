<script>
import StudentService from '../services.js'

import { STUDENT_CREATE } from '@/constants/router'

export default {
  data() {
    return {
      students: [],
      filteredStudents: [],
      search: '',
      headers: [
        { title: 'RA', key: 'ra' },
        { title: 'Name', key: 'name' },
        { title: 'CPF', key: 'cpf' },
        { title: 'Actions', key: 'actions', sortable: false }
      ],
      createStudentPath: STUDENT_CREATE.path,
      dialog: false,
      studentRemoval: {
        id: '',
        name: '',
        ra: ''
      },
      key: 0
    }
  },
  methods: {
    filterStudents() {
      this.filteredStudents = this.students.filter((student) =>
        student.name.toLowerCase().includes(this.search.toLowerCase())
      )
      this.key++
    },
    openDeleteDialog() {
      this.dialog = true
    },
    closeDeleteDialog() {
      Object.keys(this.studentRemoval).forEach((key) => {
        this.studentRemoval[key] = ''
      })
      this.dialog = false
    },
    editStudent(student) {
      StudentService.updateStudent(student)
    },
    async deleteStudent() {
      await StudentService.deleteStudent(this.studentRemoval.id)
      this.getStudents()
      this.closeDeleteDialog()
    },
    setDeleteStudent(student) {
      this.studentRemoval.id = student.id
      this.studentRemoval.name = student.name
      this.studentRemoval.ra = student.ra
      this.openDeleteDialog()
    },
    async getStudents() {
      try {
        const response = await StudentService.getAllStudents()
        this.students = response
        this.filterStudents()
      } catch (error) {
        this.$snackbar.showSnackbar(error)
      }
    }
  },
  async mounted() {
    this.getStudents()
  }
}
</script>

<template>
  <div class="container">
    <div class="container-search">
      <div class="input">
        <v-text-field
          v-model="search"
          append-inner-icon="mdi-magnify"
          label="Find by name"
          @click:append-inner="filterStudents"
          variant="solo"
          hide-details
        ></v-text-field>
      </div>
    </div>
    <div class="container-data-table">
      <v-data-table
        :key="this.key"
        :items="filteredStudents"
        :headers="headers"
        :items-per-page="10"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Lista de Alunos</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn :to="createStudentPath" variant="tonal" color="green-darken-4">
              <v-icon>mdi-plus</v-icon> New Student
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.ra }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.cpf }}</td>
            <td>
              <div class="container-btn">
                <v-btn density="compact" icon="mdi-pencil" @click="editStudent(item)"></v-btn>
                <v-btn density="compact" icon="mdi-delete" @click="setDeleteStudent(item)"></v-btn>
              </div>
            </td>
          </tr>
        </template>
      </v-data-table>
    </div>
  </div>

  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="auto">
      <v-card>
        <v-card-title class="text-h5"> Confirm Removal </v-card-title>
        <v-card-text
          >Are you sure you want to remove this student <b>{{ studentRemoval.name }}</b>
          <span v-if="studentRemoval.ra"> RA:</span> {{ studentRemoval.ra }} This action cannot be
          undone.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green-darken-1" variant="text" @click="closeDeleteDialog"> Disagree </v-btn>
          <v-btn color="red-darken-1" variant="text" @click="deleteStudent"> Agree </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped>
.container {
  width: 100%;
  padding: 5px;
}

.container-search {
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container-data-table {
  padding: 10px;
}

.container-btn {
  display: flex;
  gap: 30px;
}

.container-search > div {
  width: 300px;
}

.input {
  width: 350px;
}

.button > button {
  margin-left: 25px;
  height: 50px;
}
</style>
