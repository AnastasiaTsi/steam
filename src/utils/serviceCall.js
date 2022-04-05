import axios from "axios";

axios.defaults.baseURL = "https://htb-steam-api.vercel.app/api/apps";

const serviceCall = (url, params) => {
  axios.get(url, { params: params });
};

export default serviceCall;
