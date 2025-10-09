<template>
  <div id="filter-containers" class="filter-wrapper form-container-form-1 deactive-style">
    <div class="filters-header">
      <h3 style="font-weight: 900; font-style: italic; font-size: 25px; padding-left: 20px">
        Filter
        <span style="font-weight: 500; font-size: 18px">Menu</span>
      </h3>
      <button @click="closeOverlayMobile" class="close-btn">
        <!-- Close -->
        <img src="../assets/close-button.svg" width="30px" alt="" />
      </button>
    </div>
    <div class="categories-container">
      <div class="subject-filter-container">
        <div class="row-filter-align">
          <h4>Gender</h4>
          <div class="subject-row-category">
            <div class="categories subject-category">
              <label for="gender-male">
                <input
                  type="checkbox"
                  name="gender"
                  id="gender-male"
                  value="male"
                  v-model="filtersData.gender"
                />
                <span class="custom-checkbox"></span>
                Male
              </label>
            </div>
            <div class="categories subject-category">
              <label for="gender-female">
                <input
                  type="checkbox"
                  name="gender"
                  id="gender-female"
                  value="female"
                  v-model="filtersData.gender"
                />
                <span class="custom-checkbox"></span>
                Female
              </label>
            </div>
            <div class="categories subject-category">
              <label for="gender-other">
                <input
                  type="checkbox"
                  name="gender"
                  id="gender-other"
                  value="other"
                  v-model="filtersData.gender"
                />
                <span class="custom-checkbox"></span>
                Other
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="subject-filter-container">
        <div class="row-filter-align">
          <h4>Subjects</h4>
          <div class="subject-row-category">
            <div class="categories subject-category">
              <label for="subject-maths">
                <input
                  type="checkbox"
                  name="subject"
                  id="subject-maths"
                  value="maths"
                  v-model="filtersData.subjects"
                />
                <span class="custom-checkbox"></span>
                Maths
              </label>
            </div>
            <div class="categories subject-category">
              <label for="subject-english">
                <input
                  type="checkbox"
                  name="subject"
                  id="subject-english"
                  value="english"
                  v-model="filtersData.subjects"
                />
                <span class="custom-checkbox"></span>
                English
              </label>
            </div>
            <div class="categories subject-category">
              <label for="subject-french">
                <input
                  type="checkbox"
                  name="subject"
                  id="subject-french"
                  value="french"
                  v-model="filtersData.subjects"
                />
                <span class="custom-checkbox"></span>
                French
              </label>
            </div>
            <div class="categories subject-category">
              <label for="subject-history">
                <input
                  type="checkbox"
                  name="subject"
                  id="subject-history"
                  value="history"
                  v-model="filtersData.subjects"
                />
                <span class="custom-checkbox"></span>
                History
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="subject-filter-container">
        <div class="row-filter-align">
          <h4>Exam Center</h4>
          <div class="subject-row-category">
            <div class="categories subject-category">
              <label for="center-noida">
                <input
                  type="checkbox"
                  name="center"
                  id="center-noida"
                  value="Noida"
                  v-model="filtersData.exam"
                />
                <span class="custom-checkbox"></span>
                Noida
              </label>
            </div>
            <div class="categories subject-category">
              <label for="center-delhi">
                <input
                  type="checkbox"
                  name="center"
                  id="center-delhi"
                  value="Delhi"
                  v-model="filtersData.exam"
                />
                <span class="custom-checkbox"></span>
                Delhi
              </label>
            </div>
            <div class="categories subject-category">
              <label for="center-mumbai">
                <input
                  type="checkbox"
                  name="center"
                  id="center-mumbai"
                  value="Mumbai"
                  v-model="filtersData.exam"
                />
                <span class="custom-checkbox"></span>
                Mumbai
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="apply-clear-bar" style="text-align: center; margin-top: 20px">
        <button
          id="apply-filter-button"
          @click="applyFilters"
          class="button-register"
          type="button"
          style="min-width: 60px"
        >
          Apply
        </button>
        <button
          id="clear-filter-button"
          @click="clearFilters"
          class="button-register"
          type="button"
          style="min-width: 60px"
        >
          Clear
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filtersData: {
        gender: [],
        subjects: [],
        exam: [],
      },
    }
  },
  methods: {
    applyFilters() {
      // console.log('filtersData', this.filtersData.gender)
      // console.log('filtersData', this.filtersData)
      this.$emit('filter-apply', { ...this.filtersData })
    },
    clearFilters() {
      this.filtersData = {
        gender: [],
        subjects: [],
        exam: [],
      }
      this.$emit('clear-filters')
    },
    closeOverlayMobile() {
      this.$emit('close-overlay')
    },
  },
}
</script>

<style scoped>
:root {
  --form-bg-color: rgba(50, 55, 68, 0.75);
  --text-color: #e0e0e0;
  --accent-color: #e2ae2b8e;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace;
  color: black;
}

body {
  color: var(--text-color);
}

#filter-containers {
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  /* border: 1px solid black; */
  max-width: 300px;
  margin: 10px;
}

.filters-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.433);
}

.categories-container {
  width: 100%;
}

.form-container-form-1 {
  background: white;
  backdrop-filter: blur(30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  /* margin: 5px 2.5px 2.5px 2.5px;
  padding: 20px 20px 30px 20px; */
  border-radius: 20px;
  box-shadow: 5px 5px 10px var(--warning-red);
  /* border: 0.5px solid #f4c644; */
}

h3 {
  font-size: 28px;
  padding: 15px 10px 10px 0px;
  font-weight: 800;
}

.row-filter-align h4 {
  font-size: 18px;
  padding-left: 20px;
  padding-right: 4px;
  padding-bottom: 10px;
  padding-top: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.subject-filter-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* justify-content: center; */
}

.row-filter-align {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.subject-row-category {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 1;
  padding-left: 10px;
  padding-top: 20px;
  gap: 20px;
  margin: 4px 0px;
  flex-wrap: wrap;
  width: 100%;
}

.categories.subject-category {
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  min-width: 140px;
}

.close-btn {
  background-color: white;
  border: none;
  padding-top: 10px;
}

.subject-category {
  display: block;
  position: relative;
  padding-left: 10px;
  padding-bottom: 2.5px;
  padding-top: 2.5px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* width: 100%; */
}

.subject-category label {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
}

.subject-category input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.subject-category > * {
  padding-left: 2px;
}

.custom-checkbox {
  position: relative;
  flex-shrink: 0;
  height: 20px;
  width: 20px;
  background-color: #f0f0f0;
  border: 1px solid rgba(0, 0, 0, 0.511);
  cursor: pointer;
}

.subject-category input:checked ~ .custom-checkbox {
  background-color: #f0f0f0;
}

.custom-checkbox::after {
  content: '';
  position: absolute;
  display: none;
}

.subject-category input:checked ~ .custom-checkbox::after {
  display: block;
}

.subject-category .custom-checkbox::after {
  top: -1px;
  left: -1px;
  width: 20px;
  height: 20px;
  background-color: #f4c644;
}

.apply-clear-bar {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.button-register {
  display: inline-block;
  height: 35px;
  width: 140px;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.668);
  cursor: pointer;
  margin-top: 15px;
  background: #47b474a1;
  color: white;
  font-weight: 600;
  border-top: 1px solid #dee2e6;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  border: 0.5px solid rgba(0, 0, 0, 0.34);
}

.button-register:hover {
  background: #9b7819;
  transform: scale(1.1);
}

.button-register:active {
  background: var(--bg-color);
  box-shadow: 5px 5px 10px var(--caution-yellow);
}

@media (max-width: 900px) {
  body {
    pointer-events: none;
  }
}

@media (max-width: 488px) {
  /* .row-filter-align {
    padding-left: 25px;
  } */
  .row-view label,
  h4 {
    font-size: 18px;
    font-style: italic;
  }
  .subject-row-category {
    width: 80vw;
    align-items: center;
  }
  .button-register {
    box-shadow: none;
  }
  h3 {
    font-size: 20px;
  }
}

@media (max-width: 376px) {
  .subject-filter-container {
    width: 100%;
  }
  .subject-row-category {
    width: 100%;
  }
  .subject-category label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}

@media (max-width: 362px) {
  h3 {
    font-size: 12px;
  }
  .row-view label,
  h4 {
    font-size: 14px;
  }
}
</style>
