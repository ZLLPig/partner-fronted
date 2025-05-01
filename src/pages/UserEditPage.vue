<template>
	<van-form @submit="onSubmit">
	<van-field
			v-model="user.currentValue"
			name="user.editName"
			:label="user.editName"
			:placeholder="`请输入${user.editName}`"
	/>

	<div style="margin: 16px;">
		<van-button round block type="primary" native-type="submit">
			提交
		</van-button>
	</div>
	</van-form>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/axios.ts";
import {showSuccessToast,showFailToast} from "vant";
import router from "../router";

const route = useRoute();

const user = ref({
	editKey:route.query.editKey,
	currentValue:route.query.currentValue,
  editName:route.query.editName
})


const onSubmit = async () => {
	const res = await myAxios.post('/user/update',{
	   "id":7,
   [user.value.editKey as string]:user.value.currentValue
	})
	console.log(res,"修改内容")
	if(res.code === 0 && res.data > 0){
		showSuccessToast('修改成功');
		router.back();
	}else{
		showFailToast('修改失败');
	}
	console.log(user.value);
};



</script>

<style scoped>

</style>
