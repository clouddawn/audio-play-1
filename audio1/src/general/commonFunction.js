// chenjingyu 常用函数封装
import {Dialog, Toast} from 'vant';

export default {
  // 获取高度实现滑轮监听
  setHeight(name) {
    // 接受一个CSS选择器字符串，用于匹配dom元素，在 mounted 里面调用这段代码
    let dom = document.querySelector(name);
    let a = window.screen.availHeight;
    let b = dom.offsetTop - document.documentElement.scrollTop;
    dom.style.height = a - b + "px";
  },
  // 判断是否开始开始加载下一组数据
  getNextData(event) {
    let scrollBottom =
      event.target.scrollHeight - // 页面内容区高度，包括溢出不可见部分
      event.target.scrollTop - // 顶部不可见部分高度
      event.target.clientHeight; //
    return scrollBottom < 100;
  },
  // 通过对象的 value 获取对象的 key
  findKey(obj, value, compare = (a, b) => a === b) {
    // obj 目标对象
    return Object.keys(obj).find(k => compare(obj[k], value));
  },
  // params 转 formData
  formData(params){
    let _formData = new FormData();
    for(let key in params){
      _formData.append(key,params[key]);
    }
    return _formData;
  },
  //post 示例
  post() {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
    });
    this.$axios.post("")
      .then((res) => {
        Toast.clear();
        if (res.data.code === 200) {
        } else {
          Dialog.alert({
            message: res.data.message,
          }).then(() => {
            // on close
          });
        }
      })
      .catch((err) => {
        Toast.clear();
        console.error(err);
        Dialog.alert({
          message: "调用接口失败"
        }).then(() => {
        });
      });
  },
  // get 示例
  get() {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
    });
    this.$axios.get("")
      .then((res) => {
        Toast.clear();
        if (res.data.code === 200) {
        } else {
          Dialog.alert({
            message: res.data.message,
          }).then(() => {
            // on close
          });
        }
      })
      .catch((err) => {
        Toast.clear();
        console.error(err);
        Dialog.alert({
          message: "调用接口失败"
        }).then(() => {
        });
      });
  }
};
