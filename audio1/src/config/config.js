import Axios from "axios";
import baseURL from "./base";
import {Toast} from "vant";

let axios = Axios.create();
axios.defaults.withCredentials = true;

// axios.defaults.baseURL = baseURL.all;

axios.interceptors.response.use(
	// 请求成功
	res => {
		return res;
	},
	// 请求失败
	error => {
		Toast.clear();
		console.log(error);
		Toast("接口调用失败");
		return Promise.reject(error);
	});

export default axios;
