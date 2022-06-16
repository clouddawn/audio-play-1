import Vue from "vue";
import {RadioGroup, Radio} from "vant";
import {DatetimePicker} from "vant";
import dayjs from "dayjs";
import qs from "qs";
import {Field} from "vant";
import doImg from "@/general/doImg";
import {Area} from "vant";
import {areaList} from "@vant/area-data";

Vue.use(Area);
Vue.use(Field);
Vue.use(DatetimePicker);
Vue.use(Radio);
Vue.use(RadioGroup);

export default {
	data() {
		return {
			certificateColumns: [], // 证件类型选项
			certificatePicker: false, // 证件类型选择器
			showCertificate: "", // 页面展示证件类型
			minDate: new Date(1900, 0, 1),
			maxDate: new Date(),
			currentDate: new Date(2000, 0, 1),
			birthDatePicker: false, // 出生日期选择器
			townPicker: false, // 区镇选择器
			departurePicker: false, // 省市县选择器
			townColumns: [],
			fileList: [],
			areaList,
			form: { // 表单提交参数
				name: "",
				certificate: "",
				certificateNumber: "",
				gender: "",
				birthDate: "",
				age: "",
				phone: "",
				town: "",
				address: "",
				entrant: "", // 入境人员
				tripImg: "", // 行程卡截图
				departure: "", // 出发地
			},
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			let certificates = [
				{
					key: 1,
					value: "身份证",
				},
				{
					key: 2,
					value: "护照",
				},
				{
					key: 3,
					value: "港澳通行证",
				},
				{
					key: 4,
					value: "台胞证",
				}
			];
			certificates.forEach((item) => {
				this.certificateColumns.push(item.value);
			});
			this.townColumns = ["关帝庙镇", "砀城镇", "李庄镇"];
		},
		// 证件类型选择器确认
		certificateConfirm(value) {
			this.showCertificate = value;
			this.certificatePicker = false;
		},
		// 出生日期选择器确认
		birthDateConfirm(value) {
			this.form.birthDate = dayjs(value).format("YYYY-MM-DD");
			this.birthDatePicker = false;
		},
		// 区镇选择器确认
		townConfirm(value) {
			this.form.town = value;
			this.townPicker = false;
		},
		// 省市县选择确认
		departureConfirm(value) {
			let area = "";
			area = value[0].name + "-" + value[1].name + "-" + value[2].name;
			this.form.departure = area;
			this.departurePicker = false;
		},
		// 上传文件
		async afterRead(file) {
			let newFile = await doImg.compress(file.file, 500);
			this.form.tripImg = newFile.compressFile;
		},
		submit() {

		}
	}
};