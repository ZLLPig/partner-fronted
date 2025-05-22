<template>
	<van-cell title="用户名称" :value="user?.username" />
	<van-cell title="修改信息" is-link url="/user/update" />
	<van-cell title="我创建的队伍" is-link url="/user/team/creat" />
	<van-cell title="我加入的队伍" is-link to="/user/team/join" />

</template>

<script setup lang="ts">
import {onMounted,ref} from "vue";
import {getCurrentUser} from "../service/user.ts";

const user = ref();

onMounted(async () => {
	user.value = await getCurrentUser()
})


</script>

<style scoped>

</style>
