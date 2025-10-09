<template>
  <header>
    <div class="header-container">
      <div @click="refreshPage" class="logo-container">
        <img alt="electron logo" class="logo" src="../assets/searchTap.png" />
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
      <div class="toggle-container-view">
        <div
          class="toggle-container"
          v-show="activeView === 'table'"
          :class="{ activeCardView: activeData === 'productCard' }"
          @click="$emit('change-data-view', 'productCard')"
        >
          <img alt="table view" class="logo" src="../assets/id-card-large.svg" />
        </div>
        <div
          class="toggle-container"
          v-show="activeView === 'table'"
          :class="{ activeTableView: activeData === 'tabular' }"
          @click="$emit('change-data-view', 'tabular')"
        >
          <img alt="table view" class="logo" src="../assets/table-large.svg" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  // define props
  props: {
    activeView: String,
    activeData: String,
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
.logo-container {
  display: flex;
  /* background-color: black; */
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  /* width: 210px; */
  height: 40px;
  /* border-radius: 25px; */
  right: 1.5%;
  flex: 5%;
}

.logo-container img {
  width: auto;
  height: 50px;
}

/* .logo-container img:hover {
  background-color: #2a2826;
} */

.toggle-container-view {
  display: flex;
  width: 100%;
  flex: 10%;
  justify-content: flex-end;
  /* flex-direction: row; */
  /* width: 600px; */
}

.toggle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 40%;
  height: auto;
  background-color: rgb(255, 255, 255);
  /* border: 2px solid #000000b7; */

  border-radius: 10px;
  right: 1.5%;
}

.toggle-container {
  right: 0;
  left: 1.5%;
  padding: 2px;
  margin: 2px;
}

/* .logo-container:hover {
  transform: scale(0.9);
} */

header {
  display: flex;
  width: 100%;
  margin-top: 10px;
  justify-content: center;
}

.header-container {
  z-index: 1000;
  /* background-color: transparent; */
  /* background: #833ab448;
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 0.599) 0%,
    rgba(253, 29, 29, 0.293) 50%,
    rgba(252, 176, 69, 0.178) 100%
  );
  backdrop-filter: blur(20px); */
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  /* margin-left: 10%; */
  width: 100%;
  justify-content: space-between;
  padding: 10px 2%;
  /* box-shadow: 0px 0.5px 40px #ff7b7bb7; */
  border-radius: 10px;
  border: 1px solid #000000b7;
  border-right: 4px solid #000000b7;
  max-width: 1200px;
}

.swap-view-container {
  font-family: 'Courier New', Courier, monospace;
  color: bisque;
  font-weight: 700;
  display: flex;
  justify-content: center;
  /* width: 80%; */
  flex: 90%;
}

img {
  display: block;
  height: 32px;
  width: auto;
}
.form-button,
.table-button {
  display: flex;
  color: #2a2826;
  border: 1.5px solid bisque;
  border-bottom: 3px solid bisque;
  border-top: 1px solid bisque;
  flex: 1;
  max-width: 100px;
  width: 80%;
  height: 30px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.form-button:hover,
.table-button:hover,
.form-button:focus,
.table-button:focus {
  background-color: whitesmoke;
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

.activeDataView {
  background-color: #2a2826;
}

.activeTable {
  background-color: bisque;
  color: #2a2826;
  border-color: #2a2826;
  transition: trasform 0.4 ease-in-out;
  transform: translate(7px) scale(1.1);
}

.activeCardView,
.activeTableView {
  background-color: wheat;
  border-color: black;
  border: 0.5px solid;
}

@media (max-width: 900px) {
  header {
    margin: 0;
    border-radius: 0;
  }
  .header-container {
    z-index: 1000;
    /* background-color: transparent; */
    /* background: #833ab448;
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 0.599) 0%,
    rgba(253, 29, 29, 0.293) 50%,
    rgba(252, 176, 69, 0.178) 100%
  );
  backdrop-filter: blur(20px); */
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    width: 100%;
    justify-content: space-between;
    padding: 10px 25px;
    box-shadow: none;
    border: none;
    border-radius: 0;
    background: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  }
}

@media (max-width: 450px) {
  .toggle-container {
    width: 35%;
    height: auto;
  }

  .form-button,
  .table-button {
    display: flex;
    color: #2a2826;
    border: 1.5px solid bisque;
    border-bottom: 3px solid bisque;
    border-top: 1px solid bisque;
    flex: 1;
    max-width: 70px;
    width: 50%;
    height: 30px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-color: #2a2826;
  }

  .form-button:hover,
  .table-button:hover,
  .form-button:focus,
  .table-button:focus {
    background-color: beige;
    color: #2a2826;
    border-color: #2a2826;
  }
}
</style>
