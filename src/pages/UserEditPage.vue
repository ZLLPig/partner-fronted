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

const route = useRoute();

const user = ref({
	editKey:route.query.editKey,
	currentValue:route.query.currentValue,
  editName:route.query.editName
})

const onSubmit = (values) => {
	console.log('submit', values);
};

</script>

<style scoped>

</style>
