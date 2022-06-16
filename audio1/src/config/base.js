let baseURL = {};

if (process.env.NODE_ENV === "dev-test") { // 本地测试环境
	baseURL = {
		all: "/testApis"
	};
}
if (process.env.NODE_ENV === "dev-pro") { // 本地正式环境
	baseURL = {
		all: "/proApis"
	};
}
if (process.env.NODE_ENV === "pro-test") { // 生产测试环境
	baseURL = {
		all: "http://58.210.88.98:10087/freightstation",
	};
}
if (process.env.NODE_ENV === "pro-pro") { // 生产正式环境
	baseURL = {
		all: "http://thirdapps.ksecard.cn:12503/freightstation",
	};
}
export default baseURL;