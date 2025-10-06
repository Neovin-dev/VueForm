<template>
  <div id="app-container">
    <TheHeader :active-view="activeView" @change-view="setView" />
    <main class="main-content">
      <!-- Todo: add logic here to switch between these two components -->
      <RegistrationForm v-if="activeView === 'form'" @form-submitted="handleFormSubmit" />
      <div v-else-if="activeView === 'table'">
        <!-- table componenet -->
        <div class="No-Registrations"><h2>No Registrations Found</h2></div>
      </div>
      <!-- <RegistrationData /> -->
    </main>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import RegistrationForm from './components/RegistrationForm.vue'
// import RegistrationData from './components/RegistrationData.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    RegistrationForm,
    // RegistrationData,
  },
  data() {
    return {
      activeView: 'form',
    }
  },
  methods: {
    setView(view) {
      this.activeView = view
    },
    handleFormSubmit() {
      this.activeView = 'table'
    },
  },
}
</script>

<style scoped>
.No-Registrations {
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  color: beige;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
}
.No-Registrations h2 {
  border: 2px dotted beige;
  padding: 2% 2%;
}
</style>
