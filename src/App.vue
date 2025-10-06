<template>
  <div id="app-container">
    <TheHeader :active-view="activeView" @change-view="setView" />
    <main class="main-content">
      <RegistrationForm :formDataEdit="formDataToEdit" v-if="activeView === 'form'" @form-submitted="handleFormSubmit" />

      <RegistrationData
        v-else-if="activeView === 'table'"
        :registrations="registrationsList"
        @sort-data="handleSort"
        @delete-registration="deleteRegistration"
        @edit-registration="handleEdit"
        @filter-apply="filterApplyer"
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
      formDataToEdit: null, // placeholder for the form data to send which is stored in refilledData
    }
  },
  methods: {
    setView(view) {
      this.activeView = view
    },

    handleSort(sortType) {
      if (sortType === 'A-Z') {
        this.registrationsList.sort((a, b) => a.fname.localeCompare(b.fname));
      } else if (sortType === 'Z-A') {
        this.registrationsList.sort((a, b) => b.fname.localeCompare(a.fname));
      } else if (sortType === 'O-Y') {
        this.registrationsList.sort((a, b) => new Date(a.dob) - new Date(b.dob));
      } else if (sortType === 'Y-O') {
        this.registrationsList.sort((a, b) => new Date(b.dob) - new Date(a.dob));
      }
    },

    handleFormSubmit(submissionData) {

      this.registrationsList.push(submissionData);
      // to access the data fields this

      this.formDataToEdit = null;
      console.log("Cleared FormData to Edit", this.formDataToEdit);

      console.log("handle Registration", submissionData);
      this.activeView = 'table'
    },

    deleteRegistration(idToDelete) {
      this.registrationsList = this.registrationsList.filter(user => user.id !== idToDelete);
      console.log("DeleteRegistration: ",this.registrationsList);
    },
    // todo: add a editing button
    handleEdit(idToEdit) {
      // refill the form using unidirectional binding
      const refilledData = this.registrationsList.find(user => user.id === idToEdit);
      console.log("handleEdit: ",this.registrationsList);
      this.formDataToEdit = { ...refilledData };

      // clear the registration data entry
      this.registrationsList = this.registrationsList.filter(user => user.id != idToEdit);

      console.log("formDataToEdit Data:", this.formDataToEdit);
      console.log("refilled Data:", refilledData);

      this.activeView = "form"
    },
    filterApplyer(filtersData){
      let selectedGenders =  filtersData.gender;
      let selectedSubjects = filtersData.subjects;
      let selectedCenters = filtersData.exam;
      console.log("selectedCenters",selectedCenters);

    }
  },
}
</script>

<style scoped>
.main-content {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
