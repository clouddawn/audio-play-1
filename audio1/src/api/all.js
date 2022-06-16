import baseURL from '../config/base';
import axios from '../config/config';
import qs from 'qs';
import {
    Toast
} from 'vant';
console.log(baseURL);
// console.log(axios);
function tips(message) {
    Toast.loading({
        message,
        forbidClick: true,
        overlay: true,
    });
}
const all = {
    login(params) {
        tips('加载中...')
        return axios.post(`${baseURL.all}/userLogin`, params)
    },
    upLoad(formdata) {
        tips('上传中...')
        return axios.post("/wap/postImage", formdata, {
            headers: {
                "Content-Type": "multipart/form-data; boundary = " + new Date().getTime(),
            },
        })
    }
}

export default all;