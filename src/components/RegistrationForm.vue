<template>
  <div class="page-container">
    <div class="main-container">
      <div v-if="isMobileView" class="info-panel">
        <img src="../assets/searchtap.webp" alt="Spiral" class="info-gif" />
        <h2 style="font-weight: 900; font-style: italic; font-size: 32px; color: black">
          <!-- Search Tap -->
        </h2>
        <p>
          <!-- <img src="../assets/dot-animation.gif" alt=""> -->
          Fast and relevant search solution for small, medium or enterprise level e-commerce
          websites and mobile apps.
        </p>
      </div>

      <div class="form-panel">
        <div class="form-container-Mform">
          <h3 style="font-weight: 900; font-style: italic; font-size: 28px">
            Registration
            <span
              style="
                color: #333333;
                font-weight: 500;
                font-size: 20px;
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
              "
              >Form</span
            >
          </h3>

          <!-- Corrected @submit syntax -->
          <form id="Mform" @submit.prevent="handleSubmit">
            <div class="row-view">
              <div class="ele-container">
                <label for="fname"
                  >First Name
                  <span class="error-message" v-if="formErrors.fname"
                    ><br /><span>*{{ formErrors.fname }}</span></span
                  ></label
                >
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Enter your first name"
                  v-model="formData.fname"
                  required
                />
              </div>
              <div class="ele-container">
                <label for="lname"
                  >Last Name
                  <span class="error-message" v-if="formErrors.lname"
                    ><br /><span>*{{ formErrors.lname }}</span></span
                  ></label
                >
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Enter your last name"
                  v-model="formData.lname"
                  required
                />
              </div>
            </div>

            <div class="row-view">
              <div class="ele-container">
                <label for="dob"
                  >Date of Birth
                  <span class="error-message" v-if="formErrors.dob"
                    ><br /><span>*{{ formErrors.dob }}</span></span
                  ></label
                >
                <input type="date" id="dob" name="dob" v-model="formData.dob" required />
              </div>
              <div class="ele-container">
                <label for="email"
                  >Email Address
                  <span class="error-message" v-if="formErrors.email"
                    ><br /><span>*{{ formErrors.email }}</span></span
                  ></label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email Address"
                  v-model="formData.email"
                  required
                />
              </div>
            </div>

            <div class="row-view">
              <div class="gender-container">
                <h4>Gender</h4>
                <!-- Refactored Radio Button Group -->
                <div class="gender-row-category">
                  <div class="custom-input-group">
                    <input type="radio" id="male" value="male" v-model="formData.gender" required />
                    <label for="male"><span class="custom-radio"></span>Male</label>
                  </div>
                  <div class="custom-input-group">
                    <input type="radio" id="female" value="female" v-model="formData.gender" />
                    <label for="female"><span class="custom-radio"></span>Female</label>
                  </div>
                  <div class="custom-input-group">
                    <input type="radio" id="other" value="other" v-model="formData.gender" />
                    <label for="other"><span class="custom-radio"></span>Other</label>
                  </div>
                </div>
              </div>
              <div class="ele-container">
                <label for="telenum"
                  >Phone number
                  <span class="error-message" v-if="formErrors.telenum"
                    ><br /><span>*{{ formErrors.telenum }}</span></span
                  ></label
                >
                <div class="telenum-container">
                  <span>+91</span>
                  <input
                    type="tel"
                    id="telenum"
                    name="telenum"
                    placeholder="Enter your Phone Number"
                    v-model="formData.telenum"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="row-view">
              <div class="subject-container">
                <h4>
                  Subjects
                  <span class="error-message" v-if="formErrors.subjects"
                    ><br /><span>*{{ formErrors.subjects }}</span></span
                  >
                </h4>
                <!-- Refactored Checkbox Group -->
                <!-- <div class="subject-row-category">
                  <div class="custom-input-group">
                    <input type="checkbox" id="Maths" value="Maths" v-model="formData.subjects" />
                    <label for="Maths"><span class="custom-checkbox"></span>Maths</label>
                  </div>
                  <div class="custom-input-group">
                    <input
                      type="checkbox"
                      id="English"
                      value="English"
                      v-model="formData.subjects"
                    />
                    <label for="English"><span class="custom-checkbox"></span>English</label>
                  </div>
                  <div class="custom-input-group">
                    <input type="checkbox" id="French" value="French" v-model="formData.subjects" />
                    <label for="French"><span class="custom-checkbox"></span>French</label>
                  </div>
                  <div class="custom-input-group">
                    <input
                      type="checkbox"
                      id="History"
                      value="History"
                      v-model="formData.subjects"
                    />
                    <label for="History"><span class="custom-checkbox"></span>History</label>
                  </div>
                </div> -->
                <div class="subject-row-category">
                  <div class="custom-input-group">
                    <input type="checkbox" id="Cpp" value="C++" v-model="formData.subjects" />
                    <label for="Cpp"><span class="custom-checkbox"></span>C++</label>
                  </div>
                  <div class="custom-input-group">
                    <input
                      type="checkbox"
                      id="Javascript"
                      value="Javascript"
                      v-model="formData.subjects"
                    />
                    <label for="Javascript"><span class="custom-checkbox"></span>Javascript</label>
                  </div>
                  <div class="custom-input-group">
                    <input type="checkbox" id="Java" value="Java" v-model="formData.subjects" />
                    <label for="Java"><span class="custom-checkbox"></span>Java</label>
                  </div>
                  <div class="custom-input-group">
                    <input type="checkbox" id="Vue" value="Vue" v-model="formData.subjects" />
                    <label for="Vue"><span class="custom-checkbox"></span>Vue</label>
                  </div>
                </div>
              </div>
              <div class="ele-container">
                <label for="exam">Exam Center</label>
                <select name="exam" id="exam" v-model="formData.exam" required>
                  <option value="" disabled selected hidden>Choose an exam center</option>
                  <option value="Noida">Noida</option>
                  <option value="Delhi-NCR">Delhi NCR</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </div>
            </div>
            <button type="submit" class="submit-button" :class="{ 'update-mode': isEditMode }">
              {{ isEditMode ? 'Update' : 'Register' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  props: {
    formDataEdit: {
      type: Object,
    },
  },
  data() {
    return {
      // Form Object
      formData: {
        fname: '',
        lname: '',
        dob: '',
        email: '',
        telenum: '',
        gender: '',
        subjects: [],
        exam: '',
      },

      // Error object
      formErrors: {
        fname: '',
        lname: '',
        email: '',
        telenum: '',
        subjects: '',
      },

      isMobileView: true,
    }
  },
  computed: {
    isEditMode() {
      return this.formDataEdit
    },
  },
  methods: {
    handleSubmit() {
      this.formErrors = {
        fname: '',
        lname: '',
        dob: '',
        email: '',
        telenum: '',
        subjects: '',
      }

      let isFormValid = true

      if (this.formData.fname.trim().length < 2) {
        this.formErrors.fname = 'it must contain atleast 2 letters.'
        isFormValid = false
      }

      if (this.formData.lname.trim().length < 2) {
        this.formErrors.lname = 'it must contain atleast 2 letters.'
        isFormValid = false
      }

      if (!this.formData.dob) {
        this.formErrors.dob = 'Date of Birth is required'
        isFormValid = false
      } else {
        let today = new Date()
        let dob = new Date(this.formData.dob)

        let minimumAge = new Date()
        minimumAge.setFullYear(today.getFullYear() - 18) // lower limit

        let maximumAge = new Date()
        maximumAge.setFullYear(today.getFullYear() - 120) // upper limit

        if (dob > minimumAge) {
          this.formErrors.dob = 'You must be atleast 18 years old.'
          isFormValid = false // stop
        } else if (dob < maximumAge) {
          this.formErrors.dob = 'Age must be less than 120 years old'
          isFormValid = false
        }
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(this.formData.email)) {
        this.formErrors.email = 'Please enter a valid email address.'
        isFormValid = false
      }

      const phonePattern = /^[0-9]{10}$/
      if (!phonePattern.test(this.formData.telenum)) {
        this.formErrors.telenum = 'Phone number must be 10 digits.'
        isFormValid = false
      }

      if (this.formData.subjects.length === 0) {
        this.formErrors.subjects = 'Please select atleast one subject.'
        isFormValid = false
      }

      if (!isFormValid) {
        return
      }

      this.formData.fname =
        this.formData.fname.charAt(0).toUpperCase() + this.formData.fname.slice(1).toLowerCase()
      this.formData.lname =
        this.formData.lname.charAt(0).toUpperCase() + this.formData.lname.slice(1).toLowerCase()
      this.formData.email = this.formData.email.toLowerCase()
      // this.formData.subjects = this.formData.subjects.map((subject) =>
      //   subject.charAt(0).toUpperCase() + subject.slice(1).toLowerCase()
      // );

      const submissionData = { ...this.formData }
      console.log('Form data submitted:', submissionData)
      // this.formDataToEdit = ({});

      if (!submissionData.id) {
        submissionData.id = Date.now()
      }

      this.formData = {
        fname: '',
        lname: '',
        dob: '',
        email: '',
        telenum: '',
        gender: '',
        subjects: [],
        exam: '',
      }

      this.$emit('form-submitted', submissionData)
      this.$emit('edit-registration', submissionData)
    },

    handleResize() {
      this.isMobileView = window.innerWidth >= 930
    },
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  watch: {
    formDataEdit: {
      handler(newVal) {
        if (newVal && Object.keys(newVal).length > 0) {
          this.formData = { ...newVal }
          // newVal is the value of the formEditData
        }
      },
      immediate: true,
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
  --placeholder-color: rgba(245, 245, 220, 0.378);
  --accent-color: #0056b3;
  --input-bg-color: #ffffff;
  --border-color: #dddddd;
}

* {
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
  color: var(--text-color);
  box-sizing: border-box;
}

.page-container {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: var(--bg-color);
  /* min-height: 100vh; */
}
.submit-button.update-mode {
  background-color: #47b474a1;
}

h4 {
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 5px;
}

label {
  font-size: 14px;
}
.main-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1300px;
  /* max-height: 620px; */
  padding: 20px;
  /* background-color: transparent; */
  background: #833ab448;
  background: linear-gradient(90deg, #47b474a1, rgba(253, 29, 29, 0.293) 50%, #f7eb0280);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid var(--border-color);
  border-bottom: 3px solid var(--border-color);
  border-right: 3px solid var(--border-color);
}

.info-panel {
  flex: 0.6;
  background-color: var(--panel-bg-color);
  padding: 40px;
  display: flex;
  margin: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  border-bottom: 3px solid var(--border-color);
  border-right: 3px solid var(--border-color);
}

.info-panel img {
  width: 100%;
  /* border-radius: 50%; */
  margin: 0;
  /* border-bottom: 10px solid #3333337d ;
  border-right: 10px solid #3333337d ; */
  /* box-shadow: 8px 15px 15px hsl(0deg 0% 0% / 0.31); */
}

.info-gif {
  max-width: 80%;
  height: auto;
  margin-bottom: 24px;
  border-radius: 10px;
}

.info-panel h2 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 12px;
}

.info-panel p {
  font-size: 16px;
  color: var(--placeholder-color);
  font-weight: 600;
  line-height: 1.6;
}

.form-panel {
  flex: 1;
  background: whitesmoke;
  backdrop-filter: blur(10px);
  padding: 20px 40px 40px 40px;
  padding-bottom: 5px;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid beige;
  border-bottom: 3px solid beige;
  border-right: 3px solid beige;
}

.form-container-Mform h3 {
  text-align: center;
  /* margin-bottom: 30px; */
  color: var(--text-color);
}

#Mform {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

select {
  /* background-color: var(--input-bg-color); */
  color: var(--text-color);
  border: 2px solid transparent;
  padding: 8px;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  font-size: 14px;
  appearance: none;
}

.row-view {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.telenum-container {
  display: flex;
  align-items: center;
}
.telenum-container span {
  background-color: white;
  display: flex;
  width: 10%;
  height: 100%;
  align-items: center;
  padding-left: 3px;
  padding-right: 2px;
  /* border: 1px solid rgba(0, 0, 0, 0.401); */
  font-size: 14px;
  border-radius: 5px;
  margin: 5px;
  color: var(--placeholder-color);
}

.ele-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
}

.ele-container input,
select {
  color: #2a2826;
  border: 2px solid transparent;
  padding: 0px 12px;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  font-size: 14px;
}

.ele-container input {
  -webkit-appearance: none;
  appearance: none;
  background-color: white;
  font-size: 14px;
  text-align: start;
}

.ele-container select,
.ele-container select:focus {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  padding: 8px 30px 8px 10px;
  border: none;
  background-color: white;
  cursor: pointer;
}

/* .ele-container select::after {
  content: 'v';
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 16px;
  color: #ff0000;
} */

/* .telenum-container input {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
} */

@media (min-width: 768px) {
  .row-view {
    flex-direction: row;
    gap: 1rem;
  }
}

.ele-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.ele-container input,
select {
  color: #2a2826;
  border: 2px solid transparent;
  padding: 0px 12px;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  font-size: 14px;
}

select:focus {
  background-color: #f5f5f5;
  color: black;
  font-weight: 500;
}

.ele-container input:user-invalid {
  border: 2px solid red;
}

.ele-container > label {
  font-size: 14px;
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
}

.gender-row-category,
.subject-row-category {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;
  /* margin-top: 8px; */
}

.gender-container,
.subject-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
}

.ele-container input:focus,
select:focus {
  outline: none;
  border: 2px solid var(--accent-color);
  box-shadow: 0 0 5px var(--accent-color);
}

.ele-container input::placeholder {
  color: var(--placeholder-color);
  font-size: 12px;
  font-weight: 500;
}

.custom-input-group {
  display: block;
  position: relative;
}

.custom-input-group input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.custom-input-group label {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  user-select: none;
}

.custom-radio,
.custom-checkbox {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #f0f0f0;
  border: 1px solid #cccccc;
  position: relative;
  transition: background-color 0.2s;
}

.custom-radio {
  border-radius: 50%;
}

.custom-checkbox {
  border-radius: 3px;
}

.custom-input-group label:hover .custom-radio,
.custom-input-group label:hover .custom-checkbox {
  background-color: #f7eb024b;
}

.custom-radio::after,
.custom-checkbox::after {
  content: '';
  position: absolute;
  display: none;
}

.custom-input-group input:checked + label .custom-radio::after,
.custom-input-group input:checked + label .custom-checkbox::after {
  display: block;
  background-color: #f7eb024b;
  border-color: var(--accent-color);
}

.custom-radio::after {
  top: -1px;
  left: -1px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #d8b03c;
}

.custom-checkbox::after {
  left: -1px;
  top: -1px;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: solid #d8b03c;
  border-width: 0 0px 0px 0;
}

.submit-button {
  padding: 12px 20px;
  background-color: #f7eb024b;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  margin-left: 15%;
  margin-bottom: 5%;
  width: 70%;
  border-radius: 10px;
}

.submit-button:hover {
  background-color: #f7eb0280;
}

.error-message {
  /* background-color: #131213; */
  /* color: #ff0000; */
  font-weight: normal;
  font-size: 13px;
  margin-left: 8px;
}
.error-message span {
  color: #ff0000;
  font-weight: 700;
}

@media (max-width: 900px) {
  .main-container {
    padding: 5px;
  }
}
</style>
