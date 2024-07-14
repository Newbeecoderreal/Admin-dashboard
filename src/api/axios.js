import axios from "axios";

const BASE_URL = "https://testapi.dobladabet.com/api";

export default axios.create({
  baseURL: BASE_URL,
});
