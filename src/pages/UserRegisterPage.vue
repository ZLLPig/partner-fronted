<template>
	<van-form @submit="onSubmit">
		<van-cell-group inset>
			<van-field
					v-model="userAccount"
					name="userAccount"
					label="用户名"
					placeholder="用户名"
					:rules="[{ required: true, message: '请填写用户名' }]"
			/>
			<van-field
					v-model="userPassword"
					type="password"
					name="userPassword"
					label="密码"
					placeholder="密码"
					:rules="[{ required: true, message: '请填写密码' }]"
			/>

			<van-field
					v-model="checkPassword"
					type="password"
					name="checkPassword"
					label="再次输入密码"
					placeholder="密码"
					:rules="[{ required: true, message: '请再次输入密码' }]"
			/>
		</van-cell-group>

		<div style="margin: 16px;">
			<van-button round block type="primary" native-type="submit">
				提交
			</van-button>
		</div>
	</van-form>

</template>

<script setup lang="ts">
import {ref} from "vue";
import myAxios from "../plugins/axios.ts";
import {useRouter} from "vue-router";
import {showFailToast, showSuccessToast} from "vant";


const userAccount = ref('');
const userPassword = ref('');
const checkPassword = ref('');

const router = useRouter()

const onSubmit = async () => {
 const res = await myAxios.post('/user/register', {
		userAccount:userAccount.value,
		userPassword:userPassword.value,
		checkPassword:checkPassword.value
	})
	if(res.code === 0 && res.data  ){
		showSuccessToast('注册成功');
		router.push('/user/userLogin')
	}else {
		showFailToast('注册失败');
	}
};

</script>

<style scoped>

</style>
