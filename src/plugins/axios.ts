import axios from "axios";

const myAxios = axios.create({
	baseURL: 'http://localhost:8125/api',
});

myAxios.defaults.withCredentials = true //向后端发请求时携带cookie

// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
	console.log("发送请求",config)
	return config;
}, function (error) {
	return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
	console.log("收到响应",response)
	return response.data;
}, function (error) {
	return Promise.reject(error);
});

export default myAxios;
