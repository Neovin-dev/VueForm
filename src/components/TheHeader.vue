<template>
  <header>
    <div class="header-container">
      <div @click="refreshPage" class="logo-container">
        <!-- <img alt="electron logo" class="logo" src="../assets/searchtap_logo.png" /> -->
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
      <div
        class="toggle-container"
        v-if="activeView === 'table'"
        :class="{ activeCardView: activeData === 'productCard' }"
        @click="$emit('change-data-view', 'productCard')"
        >
        <img alt="table view" class="logo" src="../assets/id-card-large.png" />
      </div>
      <div
        class="toggle-container"
        v-if="activeView === 'table'"
        :class="{ activeTableView: activeData === 'tabular' }"
        @click="$emit('change-data-view', 'tabular')"
        >
        <img alt="table view" class="logo" src="../assets/table-large.png"

        />
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
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 210px;
  height: 40px;
  border-radius: 25px;
  right: 1.5%;
}

.logo-container img {
  width: 100%;
}

/* .logo-container img:hover {
  background-color: #2a2826;
} */

.toggle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 40px;
  background-color: wheat;
  border: 2px solid #000000b7;

  border-radius: 10px;
  right: 1.5%;
}

.toggle-container {
  right: 0;
  left: 1.5%;
  padding: 2px;
  margin: 2px
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
  position: sticky;
  top: 0px;
  /* background-color: transparent; */
  background: #833ab448;
  background: linear-gradient(90deg,rgba(131, 58, 180, 0.216) 0%, rgba(253, 29, 29, 0.293) 50%, rgba(252, 176, 69, 0.178) 100%);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  /* margin-left: 10%; */
  width: 80%;
  justify-content: space-between;
  padding: 10px 2%;
  box-shadow: 0px 0.5px 40px #ff7b7bb7;
  border-radius: 10px;
  border: 1px solid #000000b7;
  border-right: 4px solid  #000000b7;
  border-bottom: 3px solid #000000b7;
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
.form-button,
.table-button {
  display: flex;
  color: #2a2826;
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

.activeCardView, .activeTableView {
  background-color: rgba(255, 63, 63, 0.279);
}
</style>
