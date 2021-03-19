// HTTP Requests

import http from "../http-common";

class DataService {

  create(data) {
    return http.post("/files", data);
  }

  getAll() {
    return http.get("/files");
  }

}

export default new DataService();