import bridge from "@/general/bridge";

export default {
  data() {

  },
  mounted() {
    this.howPhone();
  },
  methods: {
    howPhone() {
      let ua = navigator.userAgent;
      let isAndroid = ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1;
      let isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (isIOS) {
        bridge.registerhandler(
          "getIOSQrResult",
          (resData) => {
            let data = JSON.parse(resData).key;
            alert(data);
          }
        );
      }
      if (isAndroid) {
        window["getResult"] = (resData) => {
          alert(resData);
        };
      }
    },
    scancode() {
      let ua = navigator.userAgent;
      let isAndroid = ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1;
      let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (isiOS) {
        bridge.callhandler("setIOSQr");
      }
      if (isAndroid) {
        window.ServiceAddrInterface.setScanQr();
      }
    },
  }
};