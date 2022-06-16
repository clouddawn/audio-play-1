// 基于 vant 组件开发

import {Toast} from 'vant';

export default {
  // 校验手机号
  phoneNumber(pn) { // pn 手机号码
    if (!pn) {
      Toast('请输入您的手机号');
      return false;
    } else {
      let str = pn.replace(/[ ]/g, '');
      // let reg = /^1[2-9]\d{9}$/;
      let reg = /^1\d{10}$/;
      let result = reg.test(str);
      if (!result) {
        Toast('请输入正确的11位手机号码');
      }
      return result;
    }
  },
  // 校验中文名
  chineseName(cn) { // 只能输入2到16位中文字符和·
    if (!cn) {
      Toast('请输入您的姓名');
      return false;
    } else {
      let str = cn.replace(/[ ]/g, '');
      let reg = /^[\u4e00-\u9fa5·]{2,16}$/;
      let result = reg.test(str);
      if (!result) {
        Toast('请输入正确的姓名');
      }
      return result;
    }
  },
  // 校验英文名
  englishName(en) { // 只能输入2到16位英文字符
    if (!en) {
      Toast('Please enter your English name');
      return false;
    } else {
      let reg = /^[a-zA-Z\s]{2,32}$/;
      let result = reg.test(en);
      if (!result) {
        Toast('Please enter your correct English name');
      }
      return result;
    }
  },
  realName(rn) { // 真实姓名，中英文都可以，2到32个字符
    if (!rn) {
      Toast('请输入您的姓名');
      return false;
    } else {
      let reg = /^([\u4e00-\u9fa5·]{2,32}|[a-zA-Z\s]{2,32})$/;
      let result = reg.test(rn);
      if (!result) {
        Toast('请输入正确的姓名');
      }
      return result;
    }
  },
  idCardNumber(idCard) { // 身份证
    if (!idCard) {
      Toast('请输入您的身份证号');
      return false;
    } else {
      let strArr = [...idCard];
      let numArr = [...idCard].map(Number);
      let sum =
          numArr[0] * 7 +
          numArr[1] * 9 +
          numArr[2] * 10 +
          numArr[3] * 5 +
          numArr[4] * 8 +
          numArr[5] * 4 +
          numArr[6] * 2 +
          numArr[7] +
          numArr[8] * 6 +
          numArr[9] * 3 +
          numArr[10] * 7 +
          numArr[11] * 9 +
          numArr[12] * 10 +
          numArr[13] * 5 +
          numArr[14] * 8 +
          numArr[15] * 4 +
          numArr[16] * 2;
      //remainder 余数
      let remainder = sum % 11;
      if (remainder === 0) {
        if (numArr[17] === 1) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 1) {
        if (numArr[17] === 0) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 2) {
        if (strArr[17] === "X" || strArr[17] === "x") {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 3) {
        if (numArr[17] === 9) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 4) {
        if (numArr[17] === 8) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 5) {
        if (numArr[17] === 7) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 6) {
        if (numArr[17] === 6) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 7) {
        if (numArr[17] === 5) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 8) {
        if (numArr[17] === 4) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 9) {
        if (numArr[17] === 3) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 10) {
        if (numArr[17] === 2) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else {
        Toast("请输入正确的身份证号");
        return false;
      }
    }
  },
  // 校验除身份证以外的其他证件
  foreignerId(id) {
    if (!id) {
      Toast('请输入您的证件号码');
      return false;
    } else {
      let reg = /^[A-Za-z0-9]{2,24}$/;
      if (!reg.test(id)) {
        Toast("请输入正确的证件号码");
        return false;
      } else {
        return true;
      }
    }
  },
  // 校验邮箱
  email(email) {
    if (!email) {
      Toast('请输入您的邮箱');
      return false;
    } else {
      let reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
      if (!reg.test(email)) {
        Toast("请输入正确的邮箱");
        return false;
      } else {
        return true;
      }
    }
  },
  // 校验车牌号
  carNumber(carNumber) {
    if (!carNumber) {
      Toast('请输入车牌号');
      return false;
    } else {
      let reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/;
      if (!reg.test(carNumber)) {
        Toast('请输入正确的车牌号');
        return false;
      } else {
        return true;
      }
    }
  }

};