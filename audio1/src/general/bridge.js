function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        return callback(window.WebViewJavascriptBridge)
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    let WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(() => {
        document.documentElement.removeChild(WVJBIframe)
    }, 0)
}
export default {
    //   安卓IOS的判断
    // let ua = navigator.userAgent;
    // let isAndroid = ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1;
    // let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        // 安卓
     // setLngAndLat为H5调用原生的函数名,包括传递给原生的参数
    //  var str = JSON.parse(
    //     window.ServiceAddrInterface.setLngAndLat(this.src, lat, lng, name)
    //   );
    // Ios调用原生方法，setLngAndLat为原生app定义的方法名。data2为h5传递给原生app的参数，可以为多个。callback为原生回调给H5的参数
    //  例：  let data2 = JSON.stringify(data);
    // if (isiOS) {
    //     bridge.callhandler("setLngAndLat", data2, (callback) => {
    //       console.log(data);
    //     });
    //   }
    callhandler(name, data, callback) {
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler(name, data, callback)
        })
    },
    //        created{
    //   //  安卓原生调用H5   test为函数名   需要写在周期函数中
    //     // window["test"] = function (name) {
    //     //   return name
    //     // };
    //        }
    // Ios原生调用h5方法，name是methods中定义的方法名。
    registerhandler(name, callback) {
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.registerHandler(name, function (data, responseCallback) {
                callback(data, responseCallback)
                // data为原生app传递给H5的参数
                // responseCallback为H5回调给原生的函数
            })
        })
    }
}