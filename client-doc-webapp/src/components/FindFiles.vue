<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Type path</label>
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
      <p>{{status}}</p>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newURL">Add</button>
    </div>

    <div class="list_1">
      <div>
        <div>
          <h3><strong>List of PDF/DOC files</strong></h3>
          <p>Directory: {{url}}<p>
            <div class="list_2">
                <li v-for="item in files" v-bind:key="item">{{item}}</li>
            </div>
        </div>
      </div>
    </div>  

  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "add",
  data() {
    return {
      files: [],
      url: '',
      file: {
        url: "",
      },
      submitted: false,
      status: ''
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
          this.submitted = true;
          DataService.getAll()
            .then(response => {
            this.files = response.data.files;
            this.url = response.data.url;
            console.log(response.data);
            })
        .catch(e => {
          console.log(e);
        });
        })
        .catch(e => {
            console.log(e);
            this.status = "Check if this path really exists";
        });
    },
    
    retrieveFiles() {
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
    newURL() {
      this.submitted = false;
      this.file = {};
    },
    
  },
  mounted() {
    this.retrieveFiles();
  }
};
</script>

<style >
.form-group{
  max-width: 300px;
  margin: auto;
}

.list_1 {
    margin-top: 50px;
    text-align: left;
    box-shadow: none;
}

.list_2 {
    box-shadow: none;
    border: 1px solid rgb(214, 214, 214);
    border-radius: 6px;
    padding: 10px 20px;
    margin: 20px;
    background-color: rgb(255, 255, 255);
}
.btn, .btn:active, .btn:visited, .btn:link, .btn:focus{
    margin:20px;
    background-color: rgba(21, 20, 66, 0.979);
}

.btn:hover{
    margin:20px;
    background-color: rgba(45, 43, 170, 0.979);
}

.btn btn-succes{
    margin:20px;
    background-color: rgba(21, 20, 66, 0.979);
}
</style>

