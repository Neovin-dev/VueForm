<template>
  <div id="app-container">
    <TheHeader :active-view="activeView" @change-view="setView" />
    <main class="main-content">
      <RegistrationForm
        :formDataEdit="formDataToEdit"
        v-if="activeView === 'form'"
        @form-submitted="handleFormSubmit"
      />

      <RegistrationData
        v-else-if="activeView === 'table'"
        :registrations="displayedRegistration"
        @sort-data="handleSort"
        @delete-registration="deleteRegistration"
        @edit-registration="handleEdit"
        @filter-apply="filterApplyer"
        @clear-filters="clearAllFilters"
      />
    </main>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import RegistrationForm from './components/RegistrationForm.vue'
import RegistrationData from './components/RegistrationData.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    RegistrationForm,
    RegistrationData,
  },
  data() {
    return {
      activeView: 'form', // default form view
      registrationsList: [],
      formDataToEdit: null, // placeholder for the form data to send which is stored in userToEdit

      // activeFilters and activeSort to track state
      activeFilters: {
        gender: [],
        subjects: [],
        exam: [],
      },
      activeSort: '',
    }
  },
  computed: {
    // this will handle the displayed data on the registrationForm
    // this will be passed in the RegistrationData component.

    displayedRegistration() {
      let filteredRegistrationList = [...this.registrationsList]

      if (this.activeFilters.gender.length > 0) {
        filteredRegistrationList = filteredRegistrationList.filter((user) =>
          this.activeFilters.gender.includes(user.gender),
        )
      }
      if (this.activeFilters.exam.length > 0) {
        filteredRegistrationList = filteredRegistrationList.filter((user) =>
          this.activeFilters.exam.includes(user.exam),
        )
      }
      if (this.activeFilters.subjects.length > 0) {
        filteredRegistrationList = filteredRegistrationList.filter((user) => {
          let foundMatch = false

          for (const subject of user.subjects) {
            if (this.activeFilters.subjects.includes(subject)) {
              foundMatch = true
              break
            }
          }
          return foundMatch
        })
      }

      // Sorting on Filteration
      if (this.activeSort) {
        if (this.activeSort === 'A-Z') {
          filteredRegistrationList.sort((a, b) => a.fname.localeCompare(b.fname))
        } else if (this.activeSort === 'Z-A') {
          filteredRegistrationList.sort((a, b) => b.fname.localeCompare(a.fname))
        } else if (this.activeSort === 'O-Y') {
          filteredRegistrationList.sort((a, b) => new Date(a.dob) - new Date(b.dob))
        } else if (this.activeSort === 'Y-O') {
          filteredRegistrationList.sort((a, b) => new Date(b.dob) - new Date(a.dob))
        }
      }

      return filteredRegistrationList
    },
  },
  methods: {
    setView(view) {
      this.activeView = view
    },

    handleSort(sortType) {
      // if (sortType === 'A-Z') {
      //   this.registrationsList.sort((a, b) => a.fname.localeCompare(b.fname))
      // } else if (sortType === 'Z-A') {
      //   this.registrationsList.sort((a, b) => b.fname.localeCompare(a.fname))
      // } else if (sortType === 'O-Y') {
      //   this.registrationsList.sort((a, b) => new Date(a.dob) - new Date(b.dob))
      // } else if (sortType === 'Y-O') {
      //   this.registrationsList.sort((a, b) => new Date(b.dob) - new Date(a.dob))
      // }
      this.activeSort = sortType
    },

    handleFormSubmit(submissionData) {
      this.registrationsList.push(submissionData)
      // to access the data fields this

      this.formDataToEdit = null
      console.log('Cleared FormData to Edit', this.formDataToEdit)

      console.log('handle Registration', submissionData)
      this.activeView = 'table'
    },

    deleteRegistration(idToDelete) {
      this.registrationsList = this.registrationsList.filter((user) => user.id !== idToDelete)
      console.log('DeleteRegistration: ', this.registrationsList)
    },
    // todo: add a editing button
    handleEdit(idToEdit) {
      // refill the form using unidirectional binding
      const userToEdit = this.registrationsList.find((user) => user.id === idToEdit)
      console.log('handleEdit: ', this.registrationsList)
      this.formDataToEdit = { ...userToEdit }

      // clear the registration data entry
      // this.registrationsList = this.registrationsList.filter((user) => user.id != idToEdit)

      this.activeView = 'form'
    },
    filterApplyer(filtersData) {
      this.activeFilters = filtersData
      // console.log('this.activeFilters(FiltersData):', this.activeFilters)
      // // let selectedGenders = filtersData.gender
      // // let selectedSubjects = filtersData.subjects
      // let selectedCenters = filtersData.exam
      // console.log('selectedCenters', selectedCenters)
    },
    clearAllFilters() {
      this.activeFilters = {
        gender: [],
        subjects: [],
        exam: [],
      }
      this.activeSort = ''
    },
  },
}
</script>

<style scoped>
:root {
  --bg-color: #f4f4f9;
  --panel-bg-color: #ffffff;
  --form-bg-color: rgba(255, 255, 255, 0.85);
  --text-color: #333333;
  --placeholder-color: #888888;
  --accent-color: #0056b3;
  --input-bg-color: #ffffff;
  --border-color: #dddddd;
}

* {
  color: var(--text-color);
}

.main-content {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
