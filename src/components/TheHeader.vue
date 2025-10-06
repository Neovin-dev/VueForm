<template>
  <header>
    <div class="header-container">
      <div @click="refreshPage" class="logo-container">
        <!-- <img alt="electron logo" class="logo" src="../assets/minecraft.png" /> -->
      </div>
      <div class="swap-view-container">
        <div
          class="form-button"
          :class="{ activeForm: activeView === 'form' }"
          @click="$emit('change-view', 'form')"
        >
          Form
        </div>
        <div
          class="table-button"
          :class="{ activeTable: activeView === 'table' }"
          @click="$emit('change-view', 'table')"
        >
          Table
        </div>
      </div>
      <div class="toggle-container" v-if="activeView === 'table'">
        <!-- <img alt="electron logo" class="logo" src="../assets/minecraft.png" /> -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  // define props
  props: {
    activeView: String,
  },
  data() {
    return {}
  },

  methods: {
    refreshPage() {
      window.location.reload()
    },
  },
}
</script>

<style scoped>
.logo-container,
.toggle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: beige;
  border-radius: 20px;
  right: 1.5%;
}

.toggle-container {
  right: 0;
  left: 1.5%;
}

.logo-container:hover {
  transform: scale(0.9);
}

header {
  display: flex;
  width: 100%;
  justify-content: center;
}

.header-container {
  z-index: 100;
  position: sticky;
  top: 10px;
  background-color: transparent;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  /* margin-left: 10%; */
  width: 70%;
  justify-content: space-between;
  padding: 10px 2%;
  box-shadow: 0px 0.5px 40px #f4c54414;
  border-radius: 120px;
  border: 1px solid rgba(245, 245, 220, 0.436);
  border-right: 4px solid rgba(245, 245, 220, 0.436);
  border-bottom: 3px solid rgba(245, 245, 220, 0.436);
}

.swap-view-container {
  font-family: 'Courier New', Courier, monospace;
  color: bisque;
  font-weight: 700;
  display: flex;
  justify-content: center;
  width: 100%;
}

img {
  display: block;
  height: 35px;
  width: 35px;
}

img:hover {
  transform: scale(1.2);
}

.form-button,
.table-button {
  display: flex;
  border: 1.5px solid bisque;
  border-bottom: 3px solid bisque;
  border-top: 1px solid bisque;
  flex: 1;
  max-width: 10%;
  height: 30px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.form-button:hover,
.table-button:hover,
.form-button:focus,
.table-button:focus {
  background-color: bisque;
  color: #2a2826;
  border-color: #2a2826;
}

.form-button:hover {
  transition: trasform 0.4 ease-in-out;
  transform: translate(-7px) scale(1.1);
}

.table-button:hover {
  transition: trasform 0.4 ease-in-out;
  transform: translate(7px) scale(1.1);
}

.activeForm {
  background-color: bisque;
  color: #2a2826;
  border-color: #2a2826;
  transition: trasform 0.4 ease-in-out;
  transform: translate(-7px) scale(1.1);
}

.activeTable {
  background-color: bisque;
  color: #2a2826;
  border-color: #2a2826;
  transition: trasform 0.4 ease-in-out;
  transform: translate(7px) scale(1.1);
}
</style>
