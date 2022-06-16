import {Toast} from "vant";
import bridge from "./bridge";

let ua = navigator.userAgent;
let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

const interactive = {
	//上传录音文件
	//参数为
	// obj={
	//     url:'',
	//     id:''
	// }
	upLoadAudio(params) {
		if (isiOS) {
			let param = JSON.stringify(params);
			bridge.callhandler("uploadAudio", param, (data) => {
				// 处理返回数据
				console.log(data);
			});
		} else {
			window.ServiceAddrInterface.uploadAudio(params.url, params.id);
		}
	},
	//播放本地录音
	playAudio() {
		if (isiOS) {
			bridge.callhandler("playAudio", (data) => {
				// 处理返回数据
				console.log(data);
			});
		} else {
			window.ServiceAddrInterface.playAudio();
		}
	},
	//开始录音
	// startAudio() {
	// 	if (isiOS) {
	// 		bridge.callhandler("playAudio", (data) => {
	// 			// 处理返回数据
	// 			console.log(data);
	// 		});
	// 	} else {
	// 		window.ServiceAddrInterface.playAudio();
	// 	}
	// },
	//停止录音
	startAudio() {
		if (isiOS) {
			bridge.callhandler("stopRecord", (data) => {
				// 处理返回数据
				console.log(data);
			});
		} else {
			window.ServiceAddrInterface.stopRecord();
		}
	},
	//跳转高德地图导航
	//参数为
	// obj={
	//     lat:'',
	//     lng:'',
	//     name:'',
	// }
	goGaodeMap(params) {
		if (isiOS) {
			let param = JSON.stringify(params);
			bridge.callhandler("goGaoDeMap", param, (data) => {
				// 处理返回数据
				console.log(data);
			});
		} else {
			window.ServiceAddrInterface.goGaoDeMap(params.lat, params.lng, params.name);
		}
	},
	//跳转百度地图导航
	//参数为
	// obj={
	//     lat:'',
	//     lng:'',
	//     name:'',
	// }
	goBaiduMap(params) {
		if (isiOS) {
			let param = JSON.stringify(params);
			bridge.callhandler("goBaiDuMap", param, (data) => {
				// 处理返回数据
				console.log(data);
			});
		} else {
			window.ServiceAddrInterface.goBaiDuMap(params.lat, params.lng, params.name);
		}
	},
	//调用人脸相机
	setPhoto() {
		if (isiOS) {
			bridge.callhandler("setIOSPhoto", (data) => {
				// 处理返回数据
				console.log(data);
			});
		} else {
			window.ServiceAddrInterface.setScanPhoto();
		}
	},
	//获取人脸相机返回
	//vue 中需在mounted周期函数中调用
	getPhoto() {
		if (isiOS) {
			bridge.registerhandler(
				"getIOSPhoto",
				(data, responseCallback) => {
					var res = JSON.parse(data);
					responseCallback(data);
					let newstr = res.key.replace(/[\r\n]/g, "");
					let newPhoto = newstr.replace(/[ ]/g, "");
					console.log(newPhoto);
					if (newPhoto != "") {
						return newPhoto;
					} else {
						Toast("识别失败");
					}
				}
			);
		} else {
			window["getPhoto"] = function (code, res) {
				let newstr = res.replace(/[\r\n]/g, "");
				let newPhoto = newstr.replace(/[ ]/g, "");
				console.log(newPhoto);
				if (code == 1) {
					return newPhoto;
				} else if (code == 0) {
					Toast(res);
				}
			};
		}
	},
	//跳转浏览器下载文件
	//参数
	// obj={
	//     url:'',
	// }
	goWebDownLoad(params) {
		if (isiOS) {
			let param = JSON.stringify(params);
			bridge.callhandler("iosDownLoad", param, (data) => {
				// 处理返回数据
				console.log(data);
			});
		} else {
			window.ServiceAddrInterface.androidDownLoad(params.url);
		}
	},
	//地图点显示点位
	//参数
	// obj = {
	//     src: `http://api.map.baidu.com/marker?location=${lat},${lng}&title=地址名&content=地址名&output=html&src=webapp.baidu.openAPIdemo`,
	//     lat:'',
	//     lng:'',
	//     name:''

	// }
	setMapMarker(params) {
		if (isiOS) {
			let param = JSON.stringify(params);
			bridge.callhandler("setLngAndLat", param, (data) => {
				// 处理返回数据
				console.log(data);
			});
		} else {
			window.ServiceAddrInterface.setLngAndLat(params.src, params.lat, params.lng, params.name);
		}
	},
	//分享
	//参数
	// obj={
	//     src:'分享的链接',
	//     title:'分享的名称',
	//     content: '分享的内容',
	//     type:'wxhy,wxpyq,wb,qqhy,qqkj,wb'
	// }
	//四个Type分别为微信好友，微信朋友圈，qq好友，qq空间，微博
	share(params) {
		if (isiOS) {
			let param = JSON.stringify(params);
			bridge.callhandler("shareMessage", param, (data) => {
				//处理返回数据
				console.log(data);
			});
		} else {
			const str =
				window.ServiceAddrInterface.shareMessage(
					params.src,
					params.title,
					params.content,
					params.type
				);
		}
	},
	//关闭当前H5页面
	goHome() {
		if (isiOS) {
			bridge.callhandler("goBackHome");
		} else {
			window.ServiceAddrInterface.goBackHome();
		}
	},
	//跳转扫码乘车账号充值页面
	//参数
	// obj={
	//     cardNo:'卡号',
	//     balance:'金额'
	// }
	goPayPage(params) {
		if (isiOS) {
			let param = JSON.stringify(params);
			bridge.callhandler("goPayPage", param, (data) => {
				// 处理返回数据
				console.log(data);
			});
		} else {
			window.ServiceAddrInterface.goPayPage(params.cardNo, params.balance);
		}
	},
	//h5内跳转正常应用
	goOtherApp(id) {
		if (isiOS) {

			bridge.callhandler("openApp", id, (data) => {
				// 处理返回数据
				console.log(data);
			});
		} else {
			window.ServiceAddrInterface.openApp(id);
		}
	},
	//调用人像相机
	// import interactive from "@/common/lltApp.js";
	// openCamera() {
	// 	interactive.openCamera(imgurl => console.log(imgurl));
	// },
	openCamera(callback) {
		let imgurl;
		if (isiOS) {
			bridge.registerhandler(
				"getCameraResult",
				(data) => {
					let res = JSON.parse(data);
					let newstr = res.key.replace(/[\r\n]/g, "");
					imgurl = newstr.replace(/[ ]/g, "");
					callback(imgurl);
				}
			);
			bridge.callhandler("openPortraitCamera");
		} else {
			window["getCameraResult"] = function (image64) {
				let newstr = image64.replace(/[\r\n]/g, "");
				imgurl = newstr.replace(/[ ]/g, "");
				callback(imgurl);
			};
			window.ServiceAddrInterface.openPortraitCamera();
		}
	},
	// 获取人像相机返回
	// getCamera(that) {
	// 	if (isiOS) {
	// 		bridge.registerhandler(
	// 			"getCameraResult",
	// 			(data) => {
	// 				let res = JSON.parse(data);
	// 				let newstr = res.key.replace(/[\r\n]/g, "");
	// 				let newPhoto = newstr.replace(/[ ]/g, "");
	// 			}
	// 		);
	// 		//
	// 		console.log(str);
	//
	// 		// console.log(response+'rtrtrty');
	// 		// resolve(response)
	// 		// })
	// 		// return promise
	//
	// 	} else {
	// 		window["getCameraResult"] = function (image64) {
	// 			let newstr = image64.replace(/[\r\n]/g, "");
	// 			let newPhoto = newstr.replace(/[ ]/g, "");
	// 			if (newPhoto != "") {
	// 				return newPhoto;
	// 			} else {
	// 				Toast("获取失败");
	// 			}
	// 		};
	// 	}
	// },
	//跳转小程序
	//参数ID为小程序的原始ID，打开微信小程序，更多资料里查看
	goWxMiniProgram(id) {
		if (isiOS) {

			bridge.callhandler("openWxSmallProgram", id, (data) => {
				// 处理返回数据
				console.log(data);
			});
		} else {
			window.ServiceAddrInterface.openWxSmallProgram(id);
		}
	},
	//调用扫一扫 扫码
	scan(callback) {
		if (isiOS) {
			bridge.registerhandler(
				"getIOSQrResult",
				(data) => {
					let res = JSON.parse(data).key;
					callback(res);
				}
			);
			bridge.callhandler("setIOSQr");
		} else {
			window["getResult"] = function (res) {
				callback(res);
			};
			window.ServiceAddrInterface.setScanQr();
		}
	},
	//获取扫码结果
	getScanInfo(callback) {
		if (isiOS) {
			bridge.registerhandler(
				"getIOSQrResult",
				(data) => {
					let res = JSON.parse(data);
					callback(res);
				}
			);
		} else {
			window["getResult"] = function (res) {
				callback(res);
			};
		}
	},


};
export default interactive;