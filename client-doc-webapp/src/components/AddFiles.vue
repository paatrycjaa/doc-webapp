<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Type URL</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="file.url"
          name="title"
        />
      </div>

      <button @click="saveURL" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newURL">Add</button>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "add",
  data() {
    return {
      file: {
        url: "",
      },
      submitted: false
    };
  },
  methods: {
    saveURL() {
      var data = {
        url: this.file.url,
      };

      DataService.create(data)
        .then(response => {
          this.file.url = response.data.url;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newURL() {
      this.submitted = false;
      this.file = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
