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
          Data
        </div>
      </div>
      <div class="toggle-container-view">
        <div
          class="toggle-container"
          v-show="activeView === 'table'"
          :class="{ activeCardView: activeData === 'productCard' }"
          @click="$emit('change-data-view', 'productCard')"
        >
          <svg
            fill="#000000"
            height="40px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xml:space="preserve"
            stroke="#000000"
            stroke-width="5.288"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="3.072"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path
                    d="M466.373,69.818H47.564C21.873,69.818,0,90.053,0,115.689v279.374c0,25.635,21.873,47.119,47.564,47.119h418.809 c25.691,0,45.627-21.484,45.627-47.119V115.689C512,90.053,492.064,69.818,466.373,69.818z M493.382,395.062 c0,15.372-11.582,28.501-27.009,28.501H47.564c-15.427,0-28.945-13.13-28.945-28.501V115.689 c0-15.373,13.518-27.252,28.945-27.252h418.809c15.427,0,27.009,11.88,27.009,27.252V395.062z"
                  ></path>
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M429.182,134.982h-55.855c-15.4,0-28.891,11.902-28.891,27.298v55.864c0,15.397,13.491,28.548,28.891,28.548h55.855 c15.4,0,26.964-13.151,26.964-28.548V162.28C456.145,146.884,444.582,134.982,429.182,134.982z M437.527,218.768 c0,5.139-4.168,9.304-9.309,9.304h-55.855c-5.141,0-9.309-4.166-9.309-9.304v-55.864c0-5.139,4.168-9.304,9.309-9.304h55.855 c5.141,0,9.309,4.166,9.309,9.304V218.768z"
                  ></path>
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M243,302.545H66.127c-5.146,0-9.309,4.168-9.309,9.309s4.163,9.309,9.309,9.309H243c5.145,0,9.309-4.168,9.309-9.309 S248.145,302.545,243,302.545z"
                  ></path>
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M243,349.091H66.127c-5.146,0-9.309,4.168-9.309,9.309c0,5.141,4.163,9.309,9.309,9.309H243 c5.145,0,9.309-4.168,9.309-9.309C252.309,353.259,248.145,349.091,243,349.091z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div
          class="toggle-container"
          v-show="activeView === 'table'"
          :class="{ activeTableView: activeData === 'tabular' }"
          @click="$emit('change-data-view', 'tabular')"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
              d="M4 9L20 9M8 9V20M6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.0799 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.07989 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20Z"
              stroke="currentColor"
              stroke-width="1.5"></path>
            </g>
          </svg>
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
  /* background-color: #000000; */
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
  width: 40px;
  height: 40px;
  /* padding: 5px; */
  background-color: rgb(255, 255, 255);
  border: 1px solid #2a2826;
  color: #000000;

  /* border-radius: 10px; */
  right: 0;
  left: 1.5%;
  padding: 2px;
  /* margin: 2px; */
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
  box-sizing: border-box;
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
  /* border-bottom: 1px solid #dee2e6; */
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  /* margin-left: 10%; */
  width: 100%;
  justify-content: space-between;
  padding: 10px 30px;
  /* box-shadow: 0px 0.5px 40px #ff7b7bb7; */
  border-radius: 10px;
  border: 1px solid #000000b7;
  /* border-right: 4px solid #000000b7; */
  max-width: 1300px;
}

.swap-view-container {
  /* font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; */
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
  color: rgba(0, 0, 0, 0.511);
  font-weight: 400;
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
  border: 1.5px solid rgba(0, 0, 0, 0.511);
  /* border-bottom: 3px solid bisque;
  border-top: 1px solid bisque; */
  flex: 1;
  max-width: 100px;
  width: 80%;
  height: 30px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.form-button {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.table-button {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
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
  background-color: rgba(253, 29, 29, 0.15);
  color: #2a2826;
  border: 1px solid #00000086;
  transition: trasform 0.4 ease-in-out;
  transform: translate(-7px) scale(1.1);
}

.activeDataView {
  background-color: #2a2826;
}

.activeTable {
  background-color: rgba(253, 29, 29, 0.15);
  color: #2a2826;
  border-color: #2a2826;
  transition: trasform 0.4 ease-in-out;
  transform: translate(7px) scale(1.1);
}

.activeCardView,
.activeTableView {
  background-color: #47b474a1;
  /* border: none; */
  /* border: 2px solid #f7eb0280; */
  border: 1px solid #47b474a1;
}

.activeCardView {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-left: 5px;
}

.activeTableView {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: #47b474a1;
  border-color: #47b474a1;
  color: #ffffff;
}

.activeCardView svg {
  fill: white;
  stroke-width: 1px;
}
.activeTableView svg {
  fill: #47b474;
  /* fill is internal */
  stroke-width: 1px;
}

.activeCardView svg path,
.activeTableView svg path {
  stroke: #ffffff;
  stroke-width: 1px;
}

.toggle-container svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 1280px) {
  .header-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
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
    width: 25px;
    height: 25px;
  }

  .header-container {
    padding: 10px
  }

  .logo-container {
    width: 20px;
    height: 20px;
    flex: 10%;
  }

  .swap-view-container{
    flex: 40%;
  }

  .toggle-container-view {
    flex: 15%;
  }
}
</style>
