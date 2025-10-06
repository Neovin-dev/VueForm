<template>
  <div class="page-container">
    <div class="main-container">
      <div class="info-panel">
        <!-- Using a valid placeholder for the image -->
        <img
          src="https://placehold.co/300x200/2a2826/wheat?text=ANIMATION"
          alt="Decorative Animation"
          class="info-gif"
        />
        <h2 style="font-weight: 900; font-style: italic; font-size: 28px; color: wheat">
          Search Tap
        </h2>
        <p>
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
                color: whitesmoke;
                font-weight: 500;
                font-size: 20px;
                font-family: 'Courier New', Courier, monospace;
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
                    ><em>*{{ formErrors.fname }}</em></span
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
                    ><em>*{{ formErrors.lname }}</em></span
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
                    ><em>*{{ formErrors.dob }}</em></span
                  ></label
                >
                <input type="date" id="dob" name="dob" v-model="formData.dob" required />
              </div>
              <div class="ele-container">
                <label for="email"
                  >Email Address
                  <span class="error-message" v-if="formErrors.email"
                    ><em>*{{ formErrors.email }}</em></span
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
                    ><em>*{{ formErrors.telenum }}</em></span
                  ></label
                >
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

            <div class="row-view">
              <div class="subject-container">
                <h4>
                  Subjects
                  <span class="error-message" v-if="formErrors.subjects"
                    ><em>*{{ formErrors.subjects }}</em></span
                  >
                </h4>
                <!-- Refactored Checkbox Group -->
                <div class="subject-row-category">
                  <div class="custom-input-group">
                    <input type="checkbox" id="maths" value="maths" v-model="formData.subjects" />
                    <label for="maths"><span class="custom-checkbox"></span>Maths</label>
                  </div>
                  <div class="custom-input-group">
                    <input
                      type="checkbox"
                      id="english"
                      value="english"
                      v-model="formData.subjects"
                    />
                    <label for="english"><span class="custom-checkbox"></span>English</label>
                  </div>
                  <div class="custom-input-group">
                    <input type="checkbox" id="french" value="french" v-model="formData.subjects" />
                    <label for="french"><span class="custom-checkbox"></span>French</label>
                  </div>
                  <div class="custom-input-group">
                    <input
                      type="checkbox"
                      id="history"
                      value="history"
                      v-model="formData.subjects"
                    />
                    <label for="history"><span class="custom-checkbox"></span>History</label>
                  </div>
                </div>
              </div>
              <div class="ele-container">
                <label for="exam">Exam Center</label>
                <select name="exam" id="exam" v-model="formData.exam" required>
                  <option value="" disabled>-- Choose an exam center --</option>
                  <option value="Noida">Noida</option>
                  <option value="Delhi Ncr">Delhi NCR</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </div>
            </div>

            <button type="submit" class="submit-button">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  data() {
    return {
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

      formErrors: {
        fname: '',
        lname: '',
        email: '',
        telenum: '',
        subjects: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      this.formErrors = {
        fname: '',
        lname: '',
        email: '',
        telenum: '',
        subjects: '',
      }

      let isFormValid = true

      if (this.formData.fname.trim().length < 2) {
        this.formErrors.fname = 'it must contain at least 2 letters.'
        isFormValid = false
      }

      if (this.formData.lname.trim().length < 2) {
        this.formErrors.lname = 'it must contain at least 2 letters.'
        isFormValid = false
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
        this.formErrors.subjects = 'Please select at least one subject.'
        isFormValid = false
      }

      if (!isFormValid) {
        return
      }

      const submissionData = { ...this.formData }
      console.log('Form data submitted:', submissionData)
      this.$emit('form-submitted')

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
    },
  },
}
</script>

<style scoped>
:root {
  --bg-color: #131213;
  --panel-bg-color: #1a1a1c;
  --form-bg-color: rgba(50, 55, 68, 0.75);
  --text-color: #e0e0e0;
  --placeholder-color: #a0a0a0;
  --accent-color: #f4c644;
  --input-bg-color: #2c2c2e;
  --border-color: #444;
}

* {
  font-family: 'Courier New', Courier, monospace;
  color: whitesmoke;
  box-sizing: border-box;
}

.page-container {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: var(--bg-color);
  min-height: 100vh;
}
.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background-color: transparent;
  backdrop-filter: blur(20px);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(245, 245, 220, 0.436);
  border-bottom: 3px solid rgba(245, 245, 220, 0.436);
  border-right: 3px solid rgba(245, 245, 220, 0.436);
}

@media (min-width: 992px) {
  .main-container {
    flex-direction: row;
  }
}

.info-panel {
  flex: 1;
  background-color: #2a2826;
  padding: 40px;
  display: flex;
  margin: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  border: 1px solid beige;
  border-bottom: 3px solid beige;
  border-right: 3px solid beige;
}

.info-gif {
  max-width: 80%;
  height: auto;
  margin-bottom: 24px;
  border-radius: 8px;
}

.info-panel h2 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 12px;
}

.info-panel p {
  font-size: 16px;
  color: var(--placeholder-color);
  line-height: 1.6;
}

.form-panel {
  flex: 1;
  background: #2a282675;
  backdrop-filter: blur(10px);
  padding: 40px;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid beige;
  border-bottom: 3px solid beige;
  border-right: 3px solid beige;
}

.form-container-Mform h3 {
  text-align: center;
  margin-bottom: 20px;
  color: wheat;
}

#Mform {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

select {
  background-color: beige;
  color: #2a2826;
  border: 2px solid transparent;
  padding: 8px;
  border-radius: 4px;
  height: 40px;
  width: 100%;
  font-size: 14px;
}

.row-view {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

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
  background-color: beige;
  color: #2a2826;
  border: 2px solid transparent;
  padding: 8px 12px;
  border-radius: 4px;
  height: 40px;
  width: 100%;
  font-size: 14px;
}

select:focus {
  background-color: rgba(0, 0, 0, 0.778);
  color: yellow;
  font-weight: 500;
}

.ele-container input:user-invalid {
  border: 2px solid red;
}

.ele-container > label {
  font-size: 13px;
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
}

.gender-row-category,
.subject-row-category {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 8px;
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
  color: #2a28268f;
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
  background-color: #131213;
  border: 1px solid var(--accent-color);
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
  background-color: #333;
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
  background-color: #d8b03c;
}

.custom-radio::after {
  /* top: 4px; */
  /* left: 4px; */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #d8b03c;
}

.custom-checkbox::after {
  /* left: 6px;
  top: 2px; */
  width: 15px;
  height: 15px;
  border: solid var(--accent-color);
  border-width: 0 3px 3px 0;
}

.submit-button {
  padding: 12px 20px;
  background-color: var(--accent-color);
  color: #131213;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
}

.submit-button:hover {
  background-color: #d8b03c;
}

.error-message {
  /* background-color: #131213; */
  /* color: #ff0000; */
  font-weight: normal;
  font-size: 13px;
  margin-left: 8px;
}
.error-message em {
  color: #ff0000;
}
</style>
