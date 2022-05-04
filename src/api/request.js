import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const request = async (config) => {
  config.headers = {
    ...config.headers,
    "Content-type": "application/json",
  };

  try {
    const response = await axios.request(config);
    const { data, status } = response;
    return { data, status };
  } catch (error) {
    const status = error?.request?.status;
    return { data: null, status: status ? status : -1 };
  }
};

export default request;
