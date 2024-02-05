<script>
import StudentService from '../services.js'

export default {
  data() {
    return {
      students: [],
      filteredStudents: [],
      search: '',
      headers: [
        { text: 'RA', value: 'ra' },
        { text: 'Nome', value: 'name' },
        { text: 'CPF', value: 'cpf' },
        { text: 'Ações', value: 'actions', sortable: false }
      ],
      dialogCreate: false
    }
  },
  methods: {
    filterStudents() {
      this.filteredStudents = this.students.filter((student) =>
        student.name.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    openCreateDialog() {
      this.dialogCreate = true
    },
    closeCreateDialog() {
      this.dialogCreate = false
    },
    editStudent(student) {
      console.log('Edit student:', student)
    },
    deleteStudent(student) {
      console.log('Delete student:', student)
    },
    saveStudent() {
      console.log('Save student')
      this.closeCreateDialog()
    }
  },
  async mounted() {
    try {
      const response = await StudentService.getAllStudents()
      this.students = response.data
      this.filterStudents()
    } catch (error) {
      this.$snackbar.showSnackbar(error)
    }
  }
}
</script>

<template>
  <div>
    <v-row class="mb-4">
      <v-col>
        <v-text-field v-model="search" label="Buscar por Nome" outlined @input="filterStudents" />
      </v-col>
      <v-col>
        <v-btn color="primary" @click="filterStudents">Pesquisar</v-btn>
      </v-col>
      <v-col class="text-right">
        <v-btn color="success" @click="openCreateDialog">Cadastrar Aluno</v-btn>
      </v-col>
    </v-row>
    <v-data-table :items="filteredStudents" :headers="headers" :items-per-page="10">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Lista de Alunos</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.ra }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.cpf }}</td>
          <td>
            <v-btn @click="editStudent(item)" icon>
              <v-icon color="blue">mdi-pencil</v-icon>
            </v-btn>
            <v-btn @click="deleteStudent(item)" icon>
              <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>

    <v-dialog v-model="dialogCreate" max-width="600">
      <v-card>
        <v-card-title>Cadastrar Aluno</v-card-title>
        <v-card-actions>
          <v-btn color="primary" @click="saveStudent">Salvar</v-btn>
          <v-btn @click="closeCreateDialog">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
