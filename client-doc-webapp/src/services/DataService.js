import http from "../http-common";

class DataService {

  create(data) {
    return http.post("/files", data);
  }

  getAll() {
    return http.get("/files");
  }

  get(id) {
    return http.get(`/files/${id}`);
  }
}

export default new DataService();