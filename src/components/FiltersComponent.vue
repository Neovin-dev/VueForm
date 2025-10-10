<template>
  <div id="filter-containers" class="filter-wrapper form-container-form-1 deactive-style">
    <h3 style="font-weight: 900; font-style: italic">
      Filter
      <span style="font-weight: 500; font-size: 18px">Menu</span>
    </h3>
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
              Other
              <span class="custom-checkbox"></span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="subject-filter-container">
      <div class="row-filter-align">
        <h4>Subjects</h4>
        <!-- <div class="subject-row-category">
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
        </div> -->
        <div class="subject-row-category">
          <div class="categories subject-category">
            <label for="subject-cpp">
              <input
                type="checkbox"
                name="subject"
                id="subject-cpp"
                value="C++"
                v-model="filtersData.subjects"
              />
              <span class="custom-checkbox"></span>
              C++
            </label>
          </div>
          <div class="categories subject-category">
            <label for="subject-javascript">
              <input
                type="checkbox"
                name="subject"
                id="subject-javascript"
                value="Javascript"
                v-model="filtersData.subjects"
              />
              <span class="custom-checkbox"></span>
              Javascript
            </label>
          </div>
          <div class="categories subject-category">
            <label for="subject-java">
              <input
                type="checkbox"
                name="subject"
                id="subject-java"
                value="Java"
                v-model="filtersData.subjects"
              />
              <span class="custom-checkbox"></span>
              Java
            </label>
          </div>
          <div class="categories subject-category">
            <label for="subject-vue">
              <input
                type="checkbox"
                name="subject"
                id="subject-vue"
                value="Vue"
                v-model="filtersData.subjects"
              />
              <span class="custom-checkbox"></span>
              Vue
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
                value="Delhi-NCR"
                v-model="filtersData.exam"
              />
              <span class="custom-checkbox"></span>
              Delhi NCR
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

    <div class="apply-clear-bar" style="text-align: center">
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
      //object reference mutation
    },
    clearFilters() {
      this.filtersData = {
        gender: [],
        subjects: [],
        exam: [],
      }
      this.$emit('clear-filters')
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
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  color: black;
}

body {
  color: var(--text-color);
}

.form-container-form-1 {
  background: transparent;
  backdrop-filter: blur(30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 5px 5px 2.5px 2.5px;
  padding: 20px 20px 30px 20px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px var(--warning-red);
  /* border: 0.5px solid #f4c644; */
}

h3 {
  font-size: 28px;
  padding: 15px 0px 10px 0px;
  font-weight: 800;
}

.row-filter-align h4 {
  padding-right: 4px;
}

.subject-filter-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
  /* padding-left: 10px; */
  padding-top: 10px;
  padding-bottom: 20px;
  gap: 5px;
  margin: 4px 0px;
  flex-wrap: wrap;
}

.categories {
  width: 100%;
}

.subject-category {
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  padding-left: 30px;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
  position: absolute;
  top: 0px;
  left: 0px;
  height: 20px;
  width: 20px;
  background-color: #f0f0f0;
  border: 1px solid #cccccc;
  border-radius: 2px;
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
  border-radius: 2px;
  background-color: #e2ae2b8e;
}

.apply-clear-bar {
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 5px;
}

.button-register {
  display: inline-block;
  height: 35px;
  width: 140px;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.668);
  cursor: pointer;
  margin-top: 15px;
  background: #f7eb024b;
  border-top: 1px solid #dee2e6;
  padding-top: 7px;
  display: flex;
  justify-content: space-around;
  border: 1.5px solid #f7eb0280;
  border-radius: 10px;
}

.button-register:hover {
  background: #f7eb0280;
  /* transform: scale(1.1); */
}

.button-register:active {
  background: var(--bg-color);
  box-shadow: 5px 5px 10px var(--caution-yellow);
}

@media (max-width: 767px) {
  .row-filter-align {
    padding-left: 25px;
  }
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
</style>
