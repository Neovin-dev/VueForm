<template>
  <div class="whole-card-container">
    <div class="product-card-container">
      <div class="card-container">
        <div class="top-container">
          <div class="name-container">
            <div class="first-name-container">
              {{ user.fname }}
            </div>
            <div class="last-name-container">
              {{ user.lname }}
            </div>
          </div>
          <div class="image-container">
            <img v-if="user.gender === 'male'" src="../assets/male-placeholder.jpg" alt="" />
            <img
              v-else-if="user.gender === 'female'"
              src="../assets/female-placeholder.jpg"
              alt=""
            />
            <img v-else src="../assets/cube.gif" alt="" />
          </div>
        </div>

        <div class="bottom-container">
          <div class="contact-details-container">
            <div class="phone-email-container">
              Email:
              <div class="email-container">{{ user.email }}</div>
              <div class="phone-number-container">
                <div class="phone-title">Phone No:</div>
                <div class="phone-no-value">{{ user.telenum }}</div>
              </div>
            </div>

            <!-- <div class="gender-main-container">
              <div class="gender-container">
                {{ user.gender.charAt(0).toUpperCase() }}
              </div>
              <span>{{ user.gender }}</span>
            </div> -->
          </div>
        </div>
        <!-- TODO: expandable filter -->
        <div class="collapsable-container" v-show="isCollapsableVisible">
          <div class="center-dob-container">
            <div class="center-container">
              <div class="center-title">Center:</div>
              <div class="center-choice">
                {{ user.exam }}
              </div>
            </div>
            <div class="dob-container">
              <div class="dob-title">D.O.B</div>
              <div class="dob">
                {{ user.dob }}
              </div>
            </div>
          </div>

          <div class="subject-container">
            <div class="subjects-title">Subjects:</div>
            <div class="subjects-choices-container">
              {{ user.subjects.join(', ') }}
            </div>
          </div>

          <div class="button-container">
            <div class="edit-button-container">
              <Button @click="$emit('edit', user.id)">Edit</Button>
            </div>
            <div class="del-button-container">
              <Button @click="$emit('delete', user.id)">Delete</Button>
            </div>
          </div>
        </div>
      </div>
      <div class="expanding-button" v-if="isMobileView" @click="toggleExpand" >
        <div class="down-arrow">
          <div class="Expand-button">{{ isExpanded ? 'Less Info' : 'More Info' }}</div>
          <img
            src="../assets/down-arrow.svg"
            alt="toggle details"
            :style="{
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  emit: ['edit', 'delete'],
  data() {
    return {
      isExpanded: false,
      isMobileView: window.innerWidth < 1000,
    }
  },
  computed: {
    isCollapsableVisible() {
      return !this.isMobileView || this.isExpanded
    },
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded
    },
    handleResize() {
      this.isMobileView = window.innerWidth < 1000
    },
  },
  // TODO:
}
</script>

<style scoped>
* {
  /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  font-family: 'Courier New', Courier, monospace;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.whole-card-container {
  flex: 0 0 33.33%;
  display: flex;
  max-width: 33.33%;
  /* margin: -10px; */
  /* padding: 10px; */
  /* width: 100%; */
  /* flex: 1; */
}

.product-card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  /* flex-grow: 1; */
  margin: -10px;
}

.card-container {
  background-color: whitesmoke;
  padding: 10px;
  padding: 0 10px 10px 10px;
  padding-top: 20px;

  border: 1px solid rgba(0, 0, 0, 0.416);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.top-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.image-container {
  width: 120px;
  border: 4px solid white;
}

.image-container img {
  width: 100%;
}

.name-container {
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: transparent;
  margin: 0px 2px;
  padding-left: 10px;
}

.first-name-container {
  font-size: 35px;
  font-weight: 700;
}

.last-name-container {
  font-size: 20px;
  font-weight: 600;
  color: grey;
}

.bottom-container {
  display: flex;
  width: 100%;
  padding: 5px;
}

.contact-details-container {
  padding-left: 5px;
  display: flex;
  width: 100%;
}

.email-container {
  font-size: 14px;
  /* padding-left: 10px; */
  font-weight: 700;
  color: black;
}

.phone-number-container {
  display: flex;
  flex-direction: column;
  margin: 10px 10px 2px 0px;
  /* padding-left: 0px; */
  padding-bottom: 5px;
  /* border: 1px dashed black; */
  /* background-color: #76ff503e; */
}

.phone-title {
  color: grey;
}

.phone-no-value {
  font-size: 16px;
  font-weight: 700;
  color: black;
}

.phone-email-container {
  font-weight: 700;
  color: grey;
  flex: 0 0 75%;
  /* padding-left: 10px; */
}

.gender-main-container {
  display: flex;
  flex-direction: column;
  flex: 0 0 25%;
  justify-content: center;
  text-align: center;
  border: 1px dashed black;
}

.gender-container {
  font-size: 42px;
  font-weight: 700;
}

.gender-main-container span {
  font-size: 12px;
  font-weight: 500;
  color: grey;
}

.expanding-button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* gap: 10px; */
  /* background-color: white; */
}

/* .expanding-button:hover { */
  /* background-color: #76ff508f; */
  /* border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; */
/* } */

.down-arrow {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 5px;
  /* color: white; */
  font-weight: 600;
  font-size: 16px;
}

.down-arrow img {
  width: 25px;
}

.collapsable-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;

  /* padding-left: 10px; */
}

.center-dob-container, .subject-container {
  padding-left: 10px;
}

.center-dob-container {
  margin-top: 20px;
  display: flex;
  width: 100%;
}

.center-container {
  display: flex;
  flex-direction: column;
  flex: 0 0 60%;
}

.center-title {
  font-weight: 600;
  color: grey;
}

.center-choice {
  font-size: 18px;
  font-weight: 800;
}

.center-container {
  display: flex;
  flex-direction: column;
}

.dob-container {
  display: flex;
  flex-direction: column;
  flex: 0 0 40%;
  justify-content: center;
}

.dob-title {
  font-weight: 600;
  color: grey;
}

.dob {
  font-size: 15px;
  font-weight: 800;
}

.subjects-container {
  display: flex;
  flex-direction: column;
}

.subjects-title {
  margin-top: 10px;
  padding-top: 10px;
  color: grey;
  font-weight: 600;
}

.subjects-choices-container {
  display: flex;
  flex-wrap: wrap;
  font-weight: 800;
  font-size: 18px;
}

.button-container {

  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: auto;
  margin-bottom: 10px;
}

.edit-button-container {
  display: flex;
  flex: 0 0 50%;
  justify-content: center;
}

.del-button-container {
  display: flex;
  flex: 0 0 50%;
  justify-content: center;
}

button {
  padding: 10px;
  background-color: wheat;
  color: black;
  border: none;
  /* border-radius: 5px; */
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  width: 90%;
  border: 0.5px solid rgba(0, 0, 0, 0.457);
}
button:hover {
  background-color: rgba(226, 174, 43, 0.785);
}

@media (max-width: 950px){
  .product-card-container {
    max-width: 250px;
    width: 100%;

  }
}

@media (max-width: 805px){
  .product-card-container {
    max-width: 250px;
    width: 100%;
  }

  .expanding-button:hover {
    background-color: none;
  }

  @media (max-width: 770px){
  .product-card-container {
      max-width: 260px;
    }
  }
}

@media (max-width: 650px){
  .product-card-container {
      max-width: 500px;
      min-width: 80vw;
    }
  }
</style>
