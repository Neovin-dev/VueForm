<template>
  <div class="data-container">
    <!-- <div class="filters-container" v-if="registrations.length > 1"> -->
    <div class="filters-container">
      <FiltersComponent
        @filter-apply="$emit('filter-apply', $event)"
        @clear-filters="$emit('clear-filters')"
      />
    </div>

    <div class="table-view-container">
      <div class="table-header">
        <h3>Registration <span>Data</span></h3>
        <div class="controls">
          <div v-if="registrations.length > 1" class="dropdown">
            <label for="my-dropdown" class="dropdown-label">Sort</label>
            <ul class="dropdown-menu">
              <li @click="sortData('A-Z')">Name (A-Z)</li>
              <li @click="sortData('Z-A')">Name (Z-A)</li>
              <li @click="sortData('O-Y')">Age (O-Y)</li>
              <li @click="sortData('Y-O')">Age (Y-O)</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="table-wrapper">
        <table v-if="registrations.length > 0">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>D.O.B</th>
              <th>Email</th>
              <th>Mobile No.</th>
              <th>Exam Center</th>
              <th>Gender</th>
              <th>Subjects</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in registrations" :key="user.id">
              <td>{{ user.fname }}</td>
              <td>{{ user.lname }}</td>
              <td>{{ user.dob }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.telenum }}</td>
              <td>{{ user.exam }}</td>
              <td class="capitalize">{{ user.gender }}</td>
              <td>{{ user.subjects.join(', ') }}</td>
              <td>
                <button
                  class="action-button edit-button"
                  @click="$emit('edit-registration', user.id)"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  class="action-button delete-button"
                  @click="$emit('delete-registration', user.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="no-data-message">
          <h2>No Registrations Found</h2>
          <p>Submit the form to see data here.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FiltersComponent from './FiltersComponent.vue'

export default {
  name: 'RegistrationData',
  components: {
    FiltersComponent,
  },
  props: {
    registrations: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    // sortData(sortType, registrations) {
    //   if (sortType === 'A-Z') {
    //     registrations.sort((a, b) => a.fname.localeCompare(b.fname));
    //   } else if (sortType === 'Z-A') {
    //     registrations.sort((a, b) => b.fname.localeCompare(a.fname));
    //   } else if (sortType === 'O-Y') {
    //     registrations.sort((a, b) => new Date(a.dob) - new Date(b.dob));
    //   } else if (sortType === 'Y-O') {
    //     registrations.sort((a, b) => new Date(b.dob) - new Date(a.dob));
    //   }
    // }, THis is an anti pattern parent cannot allow chidl to change the props that are passed to the child so it need to tell parent what to do and parent will do it only
    sortData(sortType) {
      this.$emit('sort-data', sortType)
    },
  },
}
</script>

<style scoped>
.data-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 75%;
}

.filters-container {
  background: #2a282675;
  backdrop-filter: blur(10px);
  padding: 2px;
  margin: 2% 1%;
  width: 30%;
  flex-basis: 30%;
  border-radius: 10px;
  border: 1px solid beige;
  border-bottom: 3px solid beige;
  border-right: 3px solid beige;
  color: whitesmoke;
}

.table-view-container {
  background: #2a282675;
  backdrop-filter: blur(10px);
  padding: 10px 40px;
  /* margin: 10px; */
  margin: 2% 1%;
  width: 70%;
  border-radius: 10px;
  max-width: 900px;
  border: 1px solid beige;
  border-bottom: 3px solid beige;
  border-right: 3px solid beige;
  color: whitesmoke;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.table-header h3 {
  font-weight: 900;
  font-style: italic;
  font-size: 28px;
  color: wheat;
}

.table-header h3 span {
  color: whitesmoke;
  font-weight: 500;
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

th,
td {
  padding: 12px 15px;
  border-bottom: 1px solid var(--border-color);
}

thead {
  background-color: #1a1a1c;
}

th {
  font-weight: 600;
  color: var(--accent-color);
}

tbody tr:hover {
  background-color: #333230;
}

.capitalize {
  text-transform: capitalize;
}

.action-button {
  padding: 6px 12px;
  border: 1px solid var(--accent-color);
  background-color: transparent;
  color: var(--accent-color);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-button:hover {
  background-color: var(--accent-color);
  color: #131213;
}

.delete-button {
  border-color: #ff6b6b;
  color: #ff6b6b;
}

.delete-button:hover {
  background-color: #ff6b6b;
  color: #131213;
}

.no-data-message {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--placeholder-color);
}
.no-data-message h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

/* Simple Dropdown for Sort */
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-label {
  padding: 8px 16px;
  background-color: #1a1a1c;
  border: 1px solid var(--accent-color);
  border-radius: 4px;
  cursor: pointer;
}
.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #2a2826;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: 1px solid var(--border-color);
  border-radius: 4px;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
.dropdown-menu li {
  color: whitesmoke;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}
.dropdown-menu li:hover {
  background-color: #333;
}
</style>
