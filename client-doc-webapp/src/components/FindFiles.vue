<template>

  <div class="list row">
      <div>
        <div>
          <label><strong>List of PDF/DOC files in directory:</strong></label>
          <p>{{url}}<p>
          <li v-for="item in files" v-bind:key="item">{{item}}</li>
        </div>
      </div>
  </div>   

</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "tutorials-list",
  data() {
    return {
      files: [],
      url: '',
    };
  },
  methods: {
    retrieveTutorials() {
     DataService.getAll()
        .then(response => {
          this.files = response.data.files;
          this.url = response.data.url;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTutorials();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
