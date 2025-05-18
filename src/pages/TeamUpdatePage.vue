<template>
	<div id="teamAdd">
		<van-form @submit="onSubmit">
			<van-field
					v-model="addTeamForm.name"
					name="name"
					label="队伍名称"
					placeholder="队伍名称"
					:rules="[{ required: true, message: '请填写队伍名称' }]"
			/>
			<van-field
					v-model="addTeamForm.description"
					rows="4"
					autosize
					label="队伍简介"
					type="textarea"
					placeholder="请输入队伍简介"
			/>
			<van-field
					v-model="addTeamForm.expireTime"
					is-link
					readonly
					name="expireTime"
					label="时间选择"
					placeholder="点击选择时间"
					@click="showPicker = true"
			/>
			<van-popup v-model:show="showPicker" destroy-on-close position="bottom">
				<van-date-picker
						:model-value="pickerValue"
						@confirm="onConfirm"
						@cancel="showPicker = false"
				/>
			</van-popup>
			<van-field name="radio" label="队伍状态">
				<template #input>
					<van-radio-group v-model="addTeamForm.status" direction="horizontal">
						<van-radio name="0">公开</van-radio>
						<van-radio name="1">私有</van-radio>
						<van-radio name="2">加密</van-radio>
					</van-radio-group>
				</template>
			</van-field>

			<van-field
					v-if=" Number(addTeamForm.status) === 2 "
					v-model="addTeamForm.password"
					type="password"
					name="password"
					label="密码"
					placeholder="密码"
					:rules="[{ required: true, message: '请填写密码' }]"
			/>
			<div style="margin: 16px;">
				<van-button round block type="primary" native-type="submit">
					提交
				</van-button>
			</div>
		</van-form>
	</div>


</template>


<script setup lang="ts">

import {onMounted, ref} from 'vue'
import myAxios from "../plugins/axios.ts";
import {showFailToast, showSuccessToast} from "vant";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute();

const id = route.query.id;

//需要用户填写的表单数据
const addTeamForm = ref({})

//获取之前的表单信息
onMounted(async () => {
	if (Number(id) <= 0) {
		showFailToast("添加队伍失败");
		return;
	}
	const res = await myAxios.get('/team/get', {
		params: {
			id: id
		}
	});
	if (res.code === 0 && res.data) {
		addTeamForm.value = res.data;
	} else {
		showFailToast("添加队伍失败，请重试");
	}
})

const onSubmit = async () => {

	const postData = {
		...addTeamForm.value,
		status: Number(addTeamForm.value.status),
	}

	const res = await myAxios.post('/team/update', postData)
	if (res?.code === 0 && res.data) {
		showSuccessToast('添加成功');
		router.push({
			path: '/team',
			replace: true
		})
	} else {
		showFailToast('添加失败');
	}
}


// 展示日期选择器
const showPicker = ref(false);
const pickerValue = ref([]);
const onConfirm = ({ selectedValues }) => {
	addTeamForm.value.expireTime = selectedValues.join('-');
	pickerValue.value = selectedValues;
	showPicker.value = false;
};

</script>

<style scoped>

</style>
