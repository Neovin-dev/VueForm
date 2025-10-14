<template>
  <div class="whole-card-container">
    <div class="product-card-container">
      <div class="header-card-container">
        <div class="button-container">
          <div class="edit-button-container">
            <svg
              @click="$emit('edit', user.id)"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                  stroke="#000000"
                  stroke-width="0.8160000000000001"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                  stroke="#000000"
                  stroke-width="0.8160000000000001"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </div>
          <div class="del-button-container">
            <svg @click="$emit('delete', user.id)" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#000000" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#000000" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </div>
        </div>
      </div>
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
            <img v-if="user.gender === 'male'" src="../assets/male-placeholder-color.png" alt="" />
            <img
              v-else-if="user.gender === 'female'"
              src="../assets/female-placeholder-color.png"
              alt=""
            />
            <img v-else src="../assets/other-placeholder.png" alt="" style="border-radius: 100%" />
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
                {{ formatDate(user.dob) }}
              </div>
            </div>
          </div>

          <div class="subject-container">
            <div class="subjects-title">Subjects:</div>
            <div class="subjects-choices-container">
              {{ user.subjects.join(', ') }}
            </div>
          </div>
        </div>
      </div>
      <div class="expanding-button" v-if="isMobileView" @click="toggleExpand">
        <!-- <div class="expanding-button" @click="toggleExpand" > -->
        <div class="down-arrow">
          <div class="Expand-button">{{ isExpanded ? 'Less Info' : 'More Info' }}</div>
          <!-- <img
            src="../assets/down-arrow.svg"
            alt="toggle details"

          /> -->
          <svg
            :style="{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }"
            fill="#000000"
            height="20px"
            width="40px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xml:space="preserve"
            stroke="#000000"
            stroke-width="0.00512"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <g>
                    <path
                      d="M256,5.333C114.88,5.333,0,117.76,0,256s114.88,250.667,256,250.667S512,394.24,512,256S397.12,5.333,256,5.333z M256,485.333C126.613,485.333,21.333,382.4,21.333,256S126.613,26.667,256,26.667S490.667,129.493,490.667,256 S385.387,485.333,256,485.333z"
                    ></path>
                    <path
                      d="M401.6,178.453c-4.8-3.733-11.52-3.093-15.253,1.493L256,340.373L125.653,179.947c-3.733-4.587-10.453-5.227-15.04-1.493 s-5.227,10.453-1.493,15.04L247.787,364.16c3.733,4.587,10.453,5.227,15.04,1.6c0.533-0.427,1.067-0.96,1.6-1.6l138.667-170.667 C406.827,188.907,406.08,182.187,401.6,178.453z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
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
      isMobileView: window.innerWidth < 768,
    }
  },
  computed: {
    isCollapsableVisible() {
      return !this.isMobileView || this.isExpanded
      // return this.isExpanded
    },
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded
    },
    handleResize() {
      this.isMobileView = window.innerWidth < 768
    },
    formatDate(dateString){
      // we recieve the data from date input in form of string
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      const date = new Date(dateString);
      const day = date.getDate();
      const monthIndex = date.getMonth(); // o Jan 11 Dec
      const year = date.getFullYear();

      return `${day}-${months[monthIndex]}-${year}`;

    },
  },
  // TODO:
}
</script>

<style scoped>
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
  /* font-family: 'Courier New', Courier, monospace; */
  /* font-family:
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
    sans-serif; */
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.whole-card-container {
  flex: 0 0 33.33%;
  display: flex;
  max-width: 33.33%;
  /* flex-wrap: wrap; */
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
  /* margin: -10px; */
}

.card-container {
  background-color: whitesmoke;
  /* padding: 10px; */
  padding: 0 10px 10px 10px;
  padding-top: 20px;
  padding-bottom: 20px;

  border: 1px solid rgba(0, 0, 0, 0.416);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.header-card-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(253, 29, 29, 0.15);
  width: 100%;
  /* padding: 2px; */
  height: 25px;
  border: 1px solid rgba(0, 0, 0, 0.421);
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.edit-button-container svg,
.del-button-container svg {
  height: 20px;
  cursor: pointer;
}
.edit-button-container svg {
  height: 16px;
}
.del-button-container,
.edit-button-container {
  padding-right: 5px;
}

.top-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.image-container {
  /* background-color: black; */
  margin-right: 10px;
  max-width: 30%;
  width: 30%;
  /* height: 100%; */
  aspect-ratio: 1 / 1;
  /* border: 4px solid white; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* resizing object fit */
}

.name-container {
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: transparent;
  margin: 0px 2px;
  padding-left: 10px;
  justify-content: center;
}

.first-name-container {
  font-size: 30px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.last-name-container {
  font-size: 20px;
  font-weight: 600;
  color: grey;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bottom-container {
  display: flex;
  width: 100%;
  /* padding: 5px; */
}

.contact-details-container {
  padding-left: 10px;
  display: flex;
  width: 100%;
}

.email-container {
  font-size: 16px;
  /* padding-left: 10px; */
  font-weight: 700;
  color: black;
}

.phone-number-container {
  display: flex;
  flex-direction: column;
  margin: 15px 10px 0px 0px;
  /* padding-left: 0px; */
  /* padding-bottom: 5px; */
  /* border: 1px dashed black; */
  /* background-color: #76ff503e; */
}

.email-container,
.phone-no-value {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  flex: 0 0 60%;
  gap: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* padding-left: 10px; */
  margin-top: 15px;
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
  background-color: #47b474a1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

/* .expanding-button:hover { */
/* background-color: #76ff508f; */
/* border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; */
/* } */

.down-arrow {
  display: flex;
  /* gap: 10px; */
  align-items: center;
  justify-content: center;
  margin: 5px;
  /* color: white; */
  font-weight: 600;
  font-size: 15px;
}

.down-arrow svg {
  width: 15px;
  margin: 0px 10px;
  /* height: 20px; */
}

.collapsable-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;

  /* padding-left: 10px; */
}

.center-dob-container,
.subject-container {
  padding-left: 10px;
}

.center-dob-container {
  margin-top: 15px;
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
  font-size: 16px;
  font-weight: 700;
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
  font-size: 16px;
  font-weight: 700;
}

.subjects-container {
  display: flex;
  flex-direction: column;
}

.subjects-title {
  margin-top: 15px;
  /* padding-top: 10px; */
  color: grey;
  font-weight: 600;
}

.subjects-choices-container {
  display: flex;
  flex-wrap: wrap;
  font-weight: 700;
  font-size: 16px;
}

.button-container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-top: auto;
  padding-bottom: 5px;
  padding-top: 5px;
  /* border: 1px solid rgba(0, 0, 0, 0.416); */
}

.edit-button-container {
  display: flex;
  /* width: 10%; */
  /* flex: 0 0 50%;
  justify-content: center; */
}

.del-button-container {
  display: flex;
  /* width: 10%; */
  /* flex: 0 0 50%;
  justify-content: center; */
}

button {
  /* padding: 10px; */
  /* background-color: wheat; */
  color: black;
  border: none;
  /* border-radius: 5px; */
  cursor: pointer;
  font-weight: bold;
  /* font-size: 10px; */
  transition: background-color 0.3s ease;
  /* margin-top: 1rem; */
  /* border: 0.5px solid rgba(0, 0, 0, 0.457); */
  width: 30px;
}
/* button:hover {
  background-color: rgba(226, 174, 43, 0.785);
} */

/* @media (max-width: 950px){
  .product-card-container {
    max-width: 250px;
    width: 100%;

  }
} */

@media (max-width: 1024px) {
  .image-container {
    width: 25%;
  }

  .name-container {
    width: 75%;
  }
  .whole-card-container {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .phone-email-container {
    flex: 0 0 100%;
  }
}

@media (max-width: 769px) {
  .whole-card-container {
    flex: 0 0 100%;
    max-width: 100%;
    flex-wrap: wrap;
  }
  .product-card-container {
    flex-direction: column;
  }
}
</style>
